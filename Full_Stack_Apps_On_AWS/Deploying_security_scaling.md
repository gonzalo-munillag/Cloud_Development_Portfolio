# Building and deplyoing

Organizing Our Code
Designing the Application to be Extensible
Features and Modularity

In this concept, we dive into splitting our code into logical "features". This is a way of describing modular programming where the code which relates to one task is grouped together. In this example, the /feed and /auth endpoints are our features. All routing, models, business logic, and helper functions for these modules should be separated as much as possible. This way, we have an understanding of where code responsibilities just by looking at the general structure.

Often one feature may depend on another feature - for example, user authentication will be needed within the feed. But these dependencies should be kept loose and consistent with only a few methods being consumed. The goal as the system continues to grow, is to minimize refactoring outside of specific features. As you continue to learn cloud and explore microservices, often entire features might be ported to their own servers infrastructure making this loose coupling even more critical.


Github link to the project RestAPI Server

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

In the video, we also go the AWS console to get the RDS endpoint. To steps are: Go to AWS console, click RDS. In the new page, in the left-hand menu, click “Databases”. In the “connectivity & security” section, under “Endpoint”, copy the endpoint URL.

Decorators

The Decorators (also known as Annotations) mentioned in this video are a feature of the sequelize-typescript package which allows us to link database features with our models. We exemplify this using the @CreatedAt and @UpdatedAt. This will set the option in the Postgres database to automatically set the date when any row is created, or updated and is useful when sorting and filtering our data.

Read more and view complete details on the model definition in the sequelize-typescript docs


# User authentication and security

# Scaling and fixing