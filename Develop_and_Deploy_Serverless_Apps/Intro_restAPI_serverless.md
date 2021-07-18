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

Context parameter:

<img width="954" alt="Screenshot 2021-07-18 at 13 32 14" src="https://user-images.githubusercontent.com/57599753/126065454-ff256e62-d24d-4adc-b031-a6e74d46eab2.png">

<img width="715" alt="Screenshot 2021-07-18 at 13 36 40" src="https://user-images.githubusercontent.com/57599753/126065516-f24e453d-af7e-48d2-ab30-9a25ffac0b0b.png">

[Should I use Lambd?](https://servers.lol/)

<img width="715" alt="Screenshot 2021-07-18 at 13 40 42" src="https://user-images.githubusercontent.com/57599753/126065611-956c2681-cdeb-4c74-93a0-fdf3a4c2cc24.png">

# REST API

When implementing REST API with AWS Lambda our functions receive HTTP requests in the form of events. Each event contains information like HTTP method, HTTP body, headers, etc.

A Lambda function should process this event and return a response that will be converted by AWS into an HTTP response.

Traditional RESTAPI

Multiple instances across regions, a load balancer, autoscaling, databases per instance.

When implementing REST API with AWS Lambda our functions receive HTTP requests in the form of events. Each event contains information like HTTP method, HTTP body, headers, etc.

A Lambda function should process this event and return a response that will be converted by AWS into an HTTP response.

What is API Gateway

    Entry point for API users
    Pass requests to other services
    Process incoming requests

API Gateway targets

<img width="1314" alt="Screenshot 2021-07-18 at 14 10 21" src="https://user-images.githubusercontent.com/57599753/126066459-855a2991-0836-41d7-8b2d-3ca7d00e2654.png">

Possible targets for an HTTP request processed by API Gateway:

    Lambda Function - call a Lambda function
    HTTP Endpoint - call a public HTTP endpoint
    AWS Service - send a request to an AWS service
    Mock - return a response without calling a backend
    VPC Link - access resource in an Amazon Virtual Private Cloud (VPC)
    
    <img width="1314" alt="Screenshot 2021-07-18 at 14 14 06" src="https://user-images.githubusercontent.com/57599753/126066585-55af7b4b-4f88-403c-a68d-6414fb675b2e.png">

However, it is recommened to use samll functions.

<img width="1314" alt="Screenshot 2021-07-18 at 14 19 16" src="https://user-images.githubusercontent.com/57599753/126066726-45930e4b-4159-4c4f-abcb-23922dfd3463.png">
<img width="1314" alt="Screenshot 2021-07-18 at 14 19 50" src="https://user-images.githubusercontent.com/57599753/126066750-ccf65111-58aa-4aae-9ee0-d9765ce7a593.png">
<img width="1314" alt="Screenshot 2021-07-18 at 14 20 31" src="https://user-images.githubusercontent.com/57599753/126066780-a95c1d12-e5a8-44ce-86c6-7a8c3fcda028.png">

What endpoint type in API Gateway directs all requests through a CloudFront distribution?

    Edge optimized

Lambda integration models:

<img width="1314" alt="Screenshot 2021-07-18 at 14 24 34" src="https://user-images.githubusercontent.com/57599753/126066922-b919b520-b4b4-4c8b-bba9-c6262af40058.png">


Velocity template langugae: defines a temp,ate, builds output frmo the template.

Lambda integration modes

    Proxy - passes all request information to a Lambda function. Easier to use.
    Non-proxy - allows to transform incoming request using Velocity Template Language

![Screenshot 2021-07-18 at 14 29 58](https://user-images.githubusercontent.com/57599753/126067095-5ec2d1b2-e990-4480-85d9-2c421c7976f7.png)

API Gateway Stage is a logical reference to a lifecycle state of the REST API implementation.


# Serverless framework
