const express = require('express');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const crypto = require('crypto');
const app = express();
const authTokens = {};


const users = [
    // This user is added to the array to avoid creating new user on each restart
    {
        firstName: 'gonzalo',
        lastName: 'm',
        email: 'example@gonzalo.com',
        // This is the SHA256 hash for value of `password`
        password: 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg='
    },
];

const getHashedPassword = (password) => {
    const sha256 = crypto.createHash('sha256');
    const hash = sha256.update(password).digest('base64');
    console.log(hash)
    return hash;
}


const generateAuthToken = () => {
    return crypto.randomBytes(30).toString('hex');
}


// to support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

app.use((req, res, next) => {
    const authToken = req.cookies['AuthToken'];
    req.user = authTokens[authToken];
    next();
});

app.engine('hbs', exphbs({
    extname: '.hbs'
}));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = getHashedPassword(password);

    const user = users.find(u => {
        return u.email === email && hashedPassword === u.password
    });

    if (user) {
        const authToken = generateAuthToken();

        authTokens[authToken] = email;

        res.cookie('AuthToken', authToken);
        res.redirect('/protected');
        return;
    } else {
        res.render('login', {
            message: 'Invalid username or password',
            messageClass: 'alert-danger'
        });
    }
});

app.get('/protected', (req, res) => {
    if (req.user) {
        res.render('protected');
    } else {
        res.render('login', {
            message: 'Please login to continue',
            messageClass: 'alert-danger'
        });
    }
});


app.post('/protected', (req, res) => {
    const { date } = req.body;
    new Date
    console.log("Date entered: " + Date.parse(date))

    const doSomething = new Promise((resolve, reject) => {
        const request = require('request');
        let url = process.env.BACKEND_API + (Date.parse(date)/1000)
        let options = {
            headers: {
            }};

        request(url, options, (error, res, body) => {
            if (error) {
                console.log(error)
                reject(error)
            };

            if (!error && res.statusCode == 200) {
                // do something with JSON, using the 'body' variable
                console.log(JSON.parse(res.body))
            };
        });
    })
});

app.listen(3000);