<img width="1148" alt="Screenshot 2021-07-18 at 18 53 11" src="https://user-images.githubusercontent.com/57599753/126075634-4448c8f3-6ef0-41a1-aed0-b1c650872636.png">
<img width="1148" alt="Screenshot 2021-07-18 at 18 53 11" src="https://user-images.githubusercontent.com/57599753/126075610-29d65b50-ab67-475c-b5f8-b43ffa4ae9f1.png">
<img width="1148" alt="Screenshot 2021-07-18 at 18 53 11" src="https://user-images.githubusercontent.com/57599753/126075615-2892e645-c775-45a1-a873-0bbe43561cb3.png">
<img width="1148" alt="Screenshot 2021-07-18 at 18 53 11" src="https://user-images.githubusercontent.com/57599753/126075617-53985483-c982-4757-b817-d1f9f342afd5.png">
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

<img width="946" alt="Screenshot 2021-07-18 at 16 25 37" src="https://user-images.githubusercontent.com/57599753/126070932-ba9dae93-6245-4c73-b498-6735905969c4.png">
<img width="946" alt="Screenshot 2021-07-18 at 16 31 17" src="https://user-images.githubusercontent.com/57599753/126071187-0d0a18a8-3000-44fa-a81b-87d5b60f9dab.png">
<img width="946" alt="Screenshot 2021-07-18 at 16 32 02" src="https://user-images.githubusercontent.com/57599753/126071190-3eceef8b-40f2-4b7c-9b2f-396657c18880.png">
<img width="946" alt="Screenshot 2021-07-18 at 16 32 40" src="https://user-images.githubusercontent.com/57599753/126071193-29949f2b-daff-4811-ba75-c407c3e9cabe.png">

Single-Origin request policy is enabled in all browsers by default and is an important security measure. To send requests from a web application to a different domain (e.g. from localhost to API Gateway domain) we need to configure Cross-Origin request policy in our API.

Alternatively, we need to configure our application so that JavaScript would be served from the same domain that is used for our REST API, but this goes beyond the scope of this course.

[AWS database types](https://aws.amazon.com/products/databases/)

DynamoDB - NoSQL
not relational
key-value store
document datastore - compley docs
scalable
100k requets
low latency
high availability - process requests without errors
serverless
schemaless - except key fields
query via API - no rich query language
ACID transactions - update multiple items in multiple tables, and either all of them succeed or none do
update streams - react to updates in tables
global tables - allow to have a single table in multiple regions that are updated simunlataneously
back-ups

Tables

Relational DB
<img width="946" alt="Screenshot 2021-07-18 at 16 45 51" src="https://user-images.githubusercontent.com/57599753/126071625-ec68fcd5-5a60-4dc1-a7ea-4f5c84b74b58.png">

Dynamo
<img width="946" alt="Screenshot 2021-07-18 at 16 46 23" src="https://user-images.githubusercontent.com/57599753/126071651-9dc23b57-bc7b-4492-95af-3be928b1b1be.png">

value types, scalar: storng, number, binary, boolean, null
complex: list, sets, map

<img width="619" alt="Screenshot 2021-07-18 at 16 48 02" src="https://user-images.githubusercontent.com/57599753/126071698-3c163199-9f95-401d-9ce9-fad8d4df6e51.png">

f - hash function
<img width="943" alt="Screenshot 2021-07-18 at 16 49 51" src="https://user-images.githubusercontent.com/57599753/126071754-bccb6c52-9243-496d-99d2-f4766fdff40d.png">

DynamoDB Capacity Modes

DynamoDB has two capacity modes:

    Provisioned capacity - we need to define the maximum amount of read/write requests DynamoDB can handle. The higher the limit we set, the more we have to pay per month. Requests are throttled if we go above the specified limit.
    On-Demand - DynamoDB will handle as many requests as we send, and we pay per-request. Can be more expensive comparing to Provisioned capacity, but is better for applications with unpredictable traffic patterns

In this course Lambda functions generate random UUIDs and use them as IDs of created items. They do not check if these UUIDs are unique, so you might be wondering, what would happen if two function calls generate the same ID? This is called a collision, and depending on how we configure a request it will either overwrite an existing item or will cause an error.

Fortunately the probability of this event is so low that we can safely ignore it in practice. Because of this UUIDs are commonly used as IDs in databases.


UUID


<img width="943" alt="Screenshot 2021-07-18 at 17 18 30" src="https://user-images.githubusercontent.com/57599753/126073107-50cf8891-1f87-4b1c-a7ce-ee26badf3505.png">

Preflight response

<img width="1149" alt="Screenshot 2021-07-18 at 17 44 16" src="https://user-images.githubusercontent.com/57599753/126073498-e62be597-640d-4de9-97de-3e1f6c754f0a.png">

# Serverless framework

<img width="1149" alt="Screenshot 2021-07-18 at 17 52 43" src="https://user-images.githubusercontent.com/57599753/126073767-2d68f23f-c4dd-4f53-a0fb-764cfc974120.png">

[YAML tutorial](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started)


a valid json is a valid yaml, but not the other way around

<img width="1149" alt="Screenshot 2021-07-18 at 17 59 47" src="https://user-images.githubusercontent.com/57599753/126074041-ad0009ad-8ab6-460d-a520-6a661770bcec.png">


<img width="1149" alt="Screenshot 2021-07-18 at 18 04 27" src="https://user-images.githubusercontent.com/57599753/126074174-1a2c2316-d249-4b12-ae95-4c2567b5d5f3.png">

[Serverless framework catalog](https://www.serverless.com/plugins/)

<img width="1149" alt="Screenshot 2021-07-18 at 18 08 24" src="https://user-images.githubusercontent.com/57599753/126074298-c1878039-45e0-4fd1-bef1-523c067fd26c.png">
<img width="1149" alt="Screenshot 2021-07-18 at 18 10 34" src="https://user-images.githubusercontent.com/57599753/126074359-7a66acec-83b3-4db7-aeb8-f61bf3ef431a.png">

How Serverless framework is deploying an application

    Relies on CloudFormation service to create all resources

<img width="827" alt="Screenshot 2021-07-18 at 18 12 43" src="https://user-images.githubusercontent.com/57599753/126074433-21e3328a-5a55-4fd8-bd4e-8f47e5f3ee6a.png">

<img width="1148" alt="Screenshot 2021-07-18 at 18 14 34" src="https://user-images.githubusercontent.com/57599753/126074495-5d072eb1-9212-44cb-a885-f6e69630f82b.png">

CloudFormation is a services for creation and management of AWS resources

CloudFormation allows us to

    Write YAML/JSON config file
    Changes state of AWS resources
    Version control the infrastructure

CloudFormation is free and we only need to pay for created resources.

API validation requests follow a JSON schema.






