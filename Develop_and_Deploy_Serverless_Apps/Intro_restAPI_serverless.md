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

<img width="1041" alt="Screenshot 2021-07-18 at 12 34 57" src="https://user-images.githubusercontent.com/57599753/126064033-a952c801-6e8d-4af3-84a0-598f8ef6893c.png">

In this demo we show how to invoke a function using AWS CLI.
To recap, there are 3 invocation types:

    Request/response
    Asynchronous invocation
    Using AWS CLI

Errors are handled differently, depending on how we execute our function.

When we use a Request/response method: If there's an error in the function, then it will return immediately to the caller, which can process the error from the Lambda function.

When we use an Async method: Instead of returning an error to the user, AWSLambda will return HTTP 202 code to the user and it will store a request into an internal queue. Additionally, it will try to call the Lambda function up to 3 times. If all of those times result into an error, then it will store the event into a "dead-letter queue", which stores all the events that the Lambda function failed to process.

When is an event sent to a Lambda function added to a Dead Letter Queue?

If an asynchronous invocation fails after three unsuccessful attempts

Async/await can only be used in an asynchronous function. An asynchronous function is identified by the async prefix.

Solution Outline
To run our function we use a service called CloudWatch, which periodically generates events. Those events are sent to the Lambda function, and on each event, the Lambda function gets a list of instances from the environment and will randomly terminate one of them.


# REST API

# Serverless framework
