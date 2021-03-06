# Building and deplyoing

Organizing Our Code
Designing the Application to be Extensible
Features and Modularity

In this concept, we dive into splitting our code into logical "features". This is a way of describing modular programming where the code which relates to one task is grouped together. In this example, the /feed and /auth endpoints are our features. All routing, models, business logic, and helper functions for these modules should be separated as much as possible. This way, we have an understanding of where code responsibilities just by looking at the general structure.

Often one feature may depend on another feature - for example, user authentication will be needed within the feed. But these dependencies should be kept loose and consistent with only a few methods being consumed. The goal as the system continues to grow, is to minimize refactoring outside of specific features. As you continue to learn cloud and explore microservices, often entire features might be ported to their own servers infrastructure making this loose coupling even more critical.

GitHub link to the project RestAPI Server

In this lesson, we'll be referencing a stubbed, more complex server which uses Node/Express. The GitHub link to clone and follow along is in the exercises folder of the course repo: https://github.com/udacity/cloud-developer/tree/master/course-02/exercises/udacity-c2-restapi.

Models

A model is the data representation of some group of data. In object-oriented programing terms, a model is an object and is represented by a new class. It should usually represent a noun such as a user, a feed item, an order, etc. We use the @Table decorator and extend the base sequelize Model class to link our model to our database table.

Parameters

The model contains instance parameters. These can be other models or primitive fields. We use the @Column decorator to link our parameters to the table columns. The bang symbol ! specifies if the field in the table can be null. Sequelize handles the datatype mappings from TypeScript types to Postgres column datatypes. 


ORMS allow us to easily switch to a different dialect of SQL (e.g. PostgreSQL, MySQL), without having to modify the code that interacts with the database. If we were to write SQL queries directly, instead of using an ORM, we would have to modify our SQL statements to be compatible with the dialect of the database that we are using.
Migrations

    Migration refers to modifying the database (by adding or removing tables or columns, for instance, or switching to a different dialect of SQL) to a newer version (usually based on new business requirements).
    Up migration is the process of modifying the database to a newer state.
    Down migration is the process of reversing an up migration, to a prior state.

Read more at the Sequelize docs on migrations

    Note Migrations is a loaded term. We most commonly refer to migrations when changing database table states (new columns, adding tables, etc). However, it can also refer to migrating infrastructure - for examples Postgres to MySQL.

Seeding

Seeds are default rows of data that will be inserted upon database formation. This may be helpful when provisioning databases frequently for specific applications and having welcome data populated, or when running tests on staging systems to simulate real-world conditions.

Read more at the Sequelize docs on seeding
Using Sequelize in our Node RestAPI Source Code

The following video uses PostBird to run SQL queries.

In the video, we also go the AWS console to get the RDS endpoint. To steps are: Go to AWS console, click RDS. In the new page, in the left-hand menu, click ???Databases???. In the ???connectivity & security??? section, under ???Endpoint???, copy the endpoint URL.

Decorators

The Decorators (also known as Annotations) mentioned in this video are a feature of the sequelize-typescript package which allows us to link database features with our models. We exemplify this using the @CreatedAt and @UpdatedAt. This will set the option in the Postgres database to automatically set the date when any row is created, or updated and is useful when sorting and filtering our data.

Read more and view complete details on the model definition in the sequelize-typescript docs

## Organizing our code

Features and Modularity

In this concept, we dive into splitting our code into logical "features". This is a way of describing modular programming where the code which relates to one task is grouped together. In this example, the /feed and /auth endpoints are our features. All routing, models, business logic, and helper functions for these modules should be separated as much as possible. This way, we have an understanding of where code responsibilities just by looking at the general structure.

Often one feature may depend on another feature - for example, user authentication will be needed within the feed. But these dependencies should be kept loose and consistent with only a few methods being consumed. The goal as the system continues to grow, is to minimize refactoring outside of specific features. As you continue to learn cloud and explore microservices, often entire features might be ported to their own servers infrastructure making this loose coupling even more critical.

ntro to Object-Relational Maps (ORM)

We'll be using an ORM called Sequelize to manage the connection to our database. We'll cover the basics in this concept, but Sequelize is a powerful tool and is extremely well documented at http://docs.sequelizejs.com/

<img width="1147" alt="Screenshot 2021-06-15 at 19 20 06" src="https://user-images.githubusercontent.com/57599753/122096297-b404a780-ce0e-11eb-8b9e-edd238cb0985.png">

Models

A model is the data representation of some group of data. In object-oriented programing terms, a model is an object and is represented by a new class. It should usually represent a noun such as a user, a feed item, an order, etc. We use the @Table decorator and extend the base sequelize Model class to link our model to our database table.
Parameters

The model contains instance parameters. These can be other models or primitive fields. We use the @Column decorator to link our parameters to the table columns. The bang symbol ! specifies if the field in the table can be null. Sequelize handles the datatype mappings from TypeScript types to Postgres column datatypes. 

ORMS allow us to easily switch to a different dialect of SQL (e.g. PostgreSQL, MySQL), without having to modify the code that interacts with the database. If we were to write SQL queries directly, instead of using an ORM, we would have to modify our SQL statements to be compatible with the dialect of the database that we are using.
Migrations

    Migration refers to modifying the database (by adding or removing tables or columns, for instance, or switching to a different dialect of SQL) to a newer version (usually based on new business requirements).
    Up migration is the process of modifying the database to a newer state.
    Down migration is the process of reversing an up migration, to a prior state.

Read more at the Sequelize docs on migrations

    Note Migrations is a loaded term. We most commonly refer to migrations when changing database table states (new columns, adding tables, etc). However, it can also refer to migrating infrastructure - for examples Postgres to MySQL.

Seeding

Seeds are default rows of data that will be inserted upon database formation. This may be helpful when provisioning databases frequently for specific applications and having welcome data populated, or when running tests on staging systems to simulate real-world conditions.

Read more at the Sequelize docs on seeding
Using Sequelize in our Node RestAPI Source Code

The following video uses PostBird to run SQL queries.

In the video, we also go the AWS console to get the RDS endpoint. To steps are: Go to AWS console, click RDS. In the new page, in the left-hand menu, click ???Databases???. In the ???connectivity & security??? section, under ???Endpoint???, copy the endpoint URL.


Decorators

The Decorators (also known as Annotations) mentioned in this video are a feature of the sequelize-typescript package which allows us to link database features with our models. We exemplify this using the @CreatedAt and @UpdatedAt. This will set the option in the Postgres database to automatically set the date when any row is created, or updated and is useful when sorting and filtering our data.

SQL Query to drop any views and tables created in a prior exercise

You may have added tables or views of your own and will need to modify this query to include any of these additional resources.Associations

Associations allow our models to reference other models. For example, consider people and dog relationships. We might represent this as a person table and dog table.

person table
id 	name
1 	Sally
2 	James

dog table
id 	name
a 	Ruffles
b 	Noodles
c 	Xander
One-To-One Association

If the person has only one dog, we can use a foreign key column in the person table to reference a single row in the dog table. This is known as a One-To-One association.

person table (extended)
id 	name 	dogId
1 	Sally 	a
2 	James 	c
One-To-Many Association

However, a person may have many dogs. In SQL we might represent this using a new separate table known as a Join table. This is essentially a table of two foreign key columns, one for person table and one for dog table. We can then find all dog foreign keys for a given person foreign key to find the relationship.

person-dog join table
personId 	dogId
1 	a
1 	b
2 	c
Associations In Sequelize

Check out the Sequelize documentation on associations to understand how to implement this pattern: http://docs.sequelizejs.com/manual/associations.html

# User authentication and security

BCrypt Clarification

Salt Rounds: the password is passed through the salted hashing function, and the output is again passed through the hashing function in a loop. The more times we iterate on the hashing function, the more we can guard against brute force attacks that try to guess the password. The salt rounds decide how many times to go through this loop. Settings salt rounds to 10 means we iterate on this hashing function 2^10 times.

Comparing Passwords: When you're using the bcrypt.compare method, it may appear that the salt is ignored. However, if you look closely at the example outputs in the video above, it is clear that the salt is actually prepended to the hash which we are using in the compare method. In other words, when we save the hash in our database - it is storing both the salt and the resulting hash as one value. Then, when comparing the plain text password, the stored salt and hash are split and the salt is used to produce the new hash, which is ultimately what is being compared.

Sessions, JWTs, and Environment Variables

Our client can be a web browser or another server. In either of these cases, we need to send some authentication information along with each request.

On our web browser, this is most commonly performed by storing some kind of credentials in something like the localstorage which allows us to store information for a specific site in a key-value store. JSON Web Tokens are one type of credential that can be stored locally in this fashion.

On our servers, we'll usually want to use something like an environment variable. This is a variable which is accessible within that instance and only that instance.

# Scaling and fixing

<img width="694" alt="Screenshot 2021-06-19 at 20 53 06" src="https://user-images.githubusercontent.com/57599753/122652701-5d65d900-d140-11eb-83d3-b84d1281b38b.png">

A name serevr is kind of like a lookup table.

You have A records, which direclty point to a specific IP address. a Cname record point to another name and is an alias.

AWS Route 53 Developer Guide

Amazon Web Services' flavor of DNS is called Route53. This service allows you to set up routing profiles for your domain names and direct traffic to services inside of and external to AWS.

Amazon provides great documentation on using Route53 in their developer guide.

Using CDNs to Serve Our Frontend

Our frontend is loosely coupled and can be served from a separate server than our backend. This allows us to create static build artifacts (pure html/css/javascript files that can be directly used by a browser) that can be served efficiently using content delivery networks.


Deploying the frontend using AWS S3 and CloudFront

The static build artifacts in the www/ directory can be uploaded to an S3 bucket which can be linked to a CloudFront distribution. This is beyond the scope of required work for this course, but it is a good skill to practice.

Amazon provides a great resource to configure S3 and CloudFront to accomplish this goal: https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-serve-static-website/

What are some of the benefits of Scaling Out over Scaling Up

    The number of instances can be changed dynamically to meet demand

    The available compute can easily exceed the upper limit of a single very powerful machine

AWS Autoscaling Group Autoscaling Triggers

AWS offers a detailed article on all of the options to scale your elastic beanstalk deployments: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environments-cfg-autoscaling-triggers.html

Testing Concurrency

As a cloud developer, you'll often want to test how your cloud will react and perform under high load. Siege is a lightweight CLI tool to create a large number of concurrent requests to simulate this kind of situation. It's strongly encouraged to read the manual and, if you're up for it, try issuing some siege tests on your local development RestAPI server.
















