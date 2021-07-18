# Introduction

What is "Serverless"?

    A buzzword (not a pattern/technology/architecture)
    A spectrum of solutions
        servers are managed by someone else
        allow to scale up and down easily
        pay for what you use (except for storage)
        no administration

Benefits of Serveless

    Low entry barrier
    Cost efficient
    High-availability and scalability

Serverless Components

    FaaS : Function as a service: write code in individual functions and deploy them to a platform to be executed
    Datastores: Storage of data
    Messaging: Send messages from one application to another
    Services: Services that provide functionalities where we don't need to manage servers; i.e. authentication, ML, video processing
    
    
    Function as a Service

    Split application into small functions
    Event driven
    Pay per invocation
    Rest is handled by a cloud provider

Lambda function vs AWS Lambda

Keep in mind that AWS Lambda is a computing service that runs code in response to events from Amazon Web Services, while a Lambda function is a single function connected to an event source running in AWS Lambda.

What parameters can we directly configure for an AWS Lambda function?

Amount of RAM

Function timeout

AWS Lambda limitations

    At most 3GB of memory per execution
    Functions can run no more that 15 minutes
    Can only write files to /tmp folder
    Limited number of concurrent executions
    Event size up to 6 MB

AWS took care of

    Deploying our code
    Autoscaling
    Reliability

How functions are executed
When we send a request to execute a Lambda function, AWSLambda creates an environment to run that function. It starts a container for the specific environment and loads the function code into the environment. Then it sends an event to our function. The same process is repeated for all the other requests coming in.


# REST API

# Serverless framework
