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
        firstName: 'User_First_Name',
        lastName: 'User_Last_Name',
        email: 'user@email.com',
        // This is the SHA256 hash for value of `password`
        password: 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg='
    },
];

// The app stores values
var datelist = [];
var todolist = [];

// 4
const getHashedPassword = (password) => {
    const sha256 = crypto.createHash('sha256');
    const hash = sha256.update(password).digest('base64');
    console.log(hash)
    return hash;
}

// 5
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

// 1 Get the home page
app.get('/', (req, res) => {
    res.render('home');
});

// 2 Get the login part of the webpage - whose frontend is in login.hns and is hypereferenced
app.get('/login', (req, res) => {
    res.render('login');
});

// 3 This handles the input data from the post request of login.hbs
app.post('/login', (req, res) => {
    // there are 2 inputs we parse
    const { email, password } = req.body;
    // for the authentication, we hash the value first
    const hashedPassword = getHashedPassword(password);

    // we compare
    const user = users.find(u => {
        return u.email === email && hashedPassword === u.password
    });

    // and then if successful we generate a token randomly  and save the login with cookies
    // After that, we can send the user to protected.hbs where one can input the calendar date
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

// 6 
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

// 7
app.post('/protected', (req, res) => {
    const { date, text } = req.body;
    new Date
    new Text
    console.log("Date entered: " + Date.parse(date))
    console.log("Text entered: " + Text.parse(text))

    // the app saves values for later retrieval
    datelist.append(date)
    todolist.append(text)

    const doSomething = new Promise((resolve, reject) => {
        //const request = require('request');
        //let url = process.env.BACKEND_API + (Date.parse(date)/1000)
        //let options = {
        //    headers: {
         //   }};

        res.render(getData, {
            post: {
                date: datelist,
                text: todolist
            }
        });
    })
});

app.listen(3000);