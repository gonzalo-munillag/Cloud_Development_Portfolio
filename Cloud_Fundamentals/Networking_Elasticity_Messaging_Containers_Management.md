# Networking and elasticity

## Networking

Networks reliably carry loads of data around the globe allowing for the delivery of content and applications with high availability. The network is the foundation of your infrastructure.

Cloud networking includes:

    network architecture
    network connectivity
    application delivery
    global performance
    delivery


### Route 53

Route 53 is a cloud domain name system (DNS) service that has servers distributed around the globe used to translates human-readable names like www.google.com into the numeric IP addresses like 74.125.21.147.

Features

    scales automatically to manage spikes in DNS queries
    allows you to register a domain name (or manage an existing)
    routes internet traffic to the resources for your domain
    checks the health of your resources

Tips

    Route 53 is found under the Networking & Content Delivery section on the AWS Management Console.
    Route 53 allows you to route users based on the user’s geographic location.


### Elasticity in the Cloud

One of the main benefits of the cloud is that it allows you to stop guessing about capacity when you need to run your applications. Sometimes you buy too much or you don't buy enough to support the running of your applications.

With elasticity, your servers, databases, and application resources can automatically scale up or scale down based on load.

#### EC2 Auto Scaling

EC2 Auto Scaling is a service that monitors your EC2 instances and automatically adjusts by adding or removing EC2 instances based on conditions you define in order to maintain application availability and provide peak performance to your users.

Amazon EC2 Auto Scaling helps you ensure that you have the correct number of Amazon EC2 instances available to handle the load for your application. You create collections of EC2 instances, called Auto Scaling groups. You can specify the minimum number of instances in each Auto Scaling group, and Amazon EC2 Auto Scaling ensures that your group never goes below this size. You can specify the maximum number of instances in each Auto Scaling group, and Amazon EC2 Auto Scaling ensures that your group never goes above this size. If you specify the desired capacity, either when you create the group or at any time thereafter, Amazon EC2 Auto Scaling ensures that your group has this many instances. If you specify scaling policies, then Amazon EC2 Auto Scaling can launch or terminate instances as demand on your application increases or decreases. 

Features

    Automatically scale in and out based on needs.
    Included automatically with Amazon EC2.
    Automate how your Amazon EC2 instances are managed.

Tips

    EC2 Auto Scaling is found on the EC2 Dashboard.
    EC2 Auto Scaling adds instances only when needed, optimizing cost savings.
    EC2 predictive scaling removes the need for manual adjustment of auto scaling parameters over time.

### Elastic Load Balancing

Elastic Load Balancing automatically distributes incoming application traffic across multiple servers.

Elastic Load Balancer is a service that:

    Balances load between two or more servers
    Stands in front of a web server
    Provides redundancy and performance

Tips

    Elastic Load Balancing can be found on the EC2 Dashbaoard.
    Elastic Load Balancing works with EC2 Instances, containers, IP addresses, and Lambda functions.
    You can configure Amazon EC2 instances to only accept traffic from a load balancer
   

#### Application Load Balancer (ALB)

Application Load Balancer (ALB) 

A simple use case: Assume you are running a microservices-architecture based application. An Application Load Balancer allows you to host the different API endpoints of your application on different servers. The load balancer then redirects the incoming HTTP/HTTP traffic to the suitable server based on the rules you specify in the configuration.

    If you choose this option, you will be taken to a six-step process:
        Configure Load Balancer
        Configure Security Settings
        Configure Security Groups
        Configure Routing
        Register Targets
        Review
 


An Application Load Balancer functions at the application layer, the seventh layer of the Open Systems Interconnection (OSI) model. After the load balancer receives a request, it evaluates the listener rules in priority order to determine which rule to apply, and then selects a target from the target group for the rule action. You can configure listener rules to route requests to different target groups based on the content of the application traffic. Routing is performed independently for each target group, even when a target is registered with multiple target groups. You can configure the routing algorithm used at the target group level. The default routing algorithm is round robin; alternatively, you can specify the least outstanding requests routing algorithm. 

Network Load Balancer (NLB)

    A Network Load Balancer helps to balance the load on each individual server. Having an NLB becomes essential when your application requires handling millions of requests per second securely while maintaining ultra-low latencies.

    This option has a five-step process:
        Configure Load Balancer
        Configure Security Settings
        Configure Routing
        Register Targets
        Review

A Network Load Balancer functions at the fourth layer of the Open Systems Interconnection (OSI) model. It can handle millions of requests per second. After the load balancer receives a connection request, it selects a target from the target group for the default rule. It attempts to open a TCP connection to the selected target on the port specified in the listener configuration.

When you enable an Availability Zone for the load balancer, Elastic Load Balancing creates a load balancer node in the Availability Zone. By default, each load balancer node distributes traffic across the registered targets in its Availability Zone only. If you enable cross-zone load balancing, each load balancer node distributes traffic across the registered targets in all enabled Availability Zones.

Classic Load Balancer (CLB)

It is a previous generation option. You can choose a Classic Load Balancer when you have an existing application running in the EC2-Classic network. You will have to follow a seven-step process to create a CLB:

    Define Load Balancer
    Assign Security Groups
    Configure Security Settings
    Configure Health Check
    Add EC2 Instances
    Add Tags
    Review
    
A load balancer distributes incoming application traffic across multiple EC2 instances in multiple Availability Zones. This increases the fault tolerance of your applications. Elastic Load Balancing detects unhealthy instances and routes traffic only to healthy instances. 

## Messaging and containers
   
A load balancer distributes incoming application traffic across multiple EC2 instances in multiple Availability Zones. This increases the fault tolerance of your applications. Elastic Load Balancing detects unhealthy instances and routes traffic only to healthy instances. 

### Simple Notification Service

Amazon Simple Notification Service (or SNS) is a cloud service that allows you to send notifications to the users of your applications. SNS allows you to decouple the notification logic from being embedded in your applications and allows notifications to be published to a large number of subscribers.

Amazon Simple Notification Service (Amazon SNS) is a managed service that provides message delivery from publishers to subscribers (also known as producers and consumers). Publishers communicate asynchronously with subscribers by sending messages to a topic, which is a logical access point and communication channel. Clients can subscribe to the SNS topic and receive published messages using a supported endpoint type, such as Amazon Kinesis Data Firehose, Amazon SQS, AWS Lambda, HTTP, email, mobile push notifications, and mobile text messages (SMS). 

Features

    SNS uses a publish/subscribe model.
    SNS can publish messages to Amazon SQS queues, AWS Lambda functions, and HTTP/S webhooks.

Tips

    SNS is found under the Application Integration section on the AWS Management Console.
    SNS Topic names are limited to 256 characters.
    A notification can contain only one message.

### Queues

A queue is a data structure that holds requests called messages. Messages in a queue are commonly processed in order, first in, first out (or FIFO).

Messaging queues improve:

    performance
    scalability
    user experience

### Simple Queue Service
Amazon Simple Queue Service (SQS) is a fully managed message queuing service that allows you to integrate queuing functionality in your application. SQS offers two types of message queues: standard and FIFO. 

Features

    send messages
    store messages
    receive messages

Tips

    The Simple Queue Service (SQS) is found under the Application Integration on the AWS Management Console.
    FIFO queues support up to 300 messages per second.
    FIFO queues guarantee the ordering of messages.
    Standard queues offer best-effort ordering but no guarantees.
    Standard queues deliver a message at least once, but occasionally more than one copy of a message is delivered.
    
 You should use FIFO ordering when message ordering is critical and standard queues when messages can arrive more than once and be processed out of order.
 
 ### Containers
 
 What is a Container?

OS level virtualization allows us to run multiple isolated processes in parallel. A container is an isolated process that consists of the following items, all bundled into one package:

    the application code,
    the required dependencies (e.g. libraries, utilities, configuration files), and
    the necessary runtime environment to run the application.

Each container is an independent component that can run on its own and be moved from environment to environment.
Benefit of Containers

    Containers make it easier for developers to create, deploy, and run applications on different hardware and platforms, quickly and easily.
    Containers share a single kernel and share application libraries.
    Containers cause a lower system overhead as compared to Virtual Machines.

How to create containers?

Several platforms (called Container runtime/engines) allow us to create containers. A few such platforms are:

    Docker
    CRI-O
    OpenVZ
    Containerd

In this ND, you will learn to create containers using the Docker engine.
Docker Containers versus Virtual Machines

There are several benefits of using Containers over VMs:

    Size: Containers are much smaller than Virtual Machines (VM) and run as isolated processes versus virtualized hardware. VMs can be in GBs while containers are in MBs.
    Speed: Virtual Machines can be slow to boot and take minutes to launch. A container can spawn much more quickly typically in seconds.
    Composability: Containers are designed to be programmatically built and are defined as source code. Virtual Machines are often replicas of a conventional computer system.
    
A container consists of everything an application needs to run: the application itself and its dependencies (e.g. libraries, utilities, configuration files), all bundled into one package. 

<img width="1554" alt="screenshot-2021-01-05-at-6 02 09-pm" src="https://user-images.githubusercontent.com/57599753/119259476-c8b69c80-bbce-11eb-960f-2c4a8d8cf3b4.png">

A container is an instantiation of an image.

2. Docker

Docker is a (container runtime) tool that helps to build, test, and run containers. You can build containers locally using a command-line utility, Docker Desktop. If there are multiple containers running individual services of an application, you will need to use Docker Compose utility to specify dependent relationships between containers.
3. Docker Image

An image (or Docker image) is a portable auto-generated template that contains a set of instructions to create a container. An image can be instantiated multiple numbers of times to create multiple containers.

4. Dockerfile

A text file containing commands to create an image. In other words, Docker generates images by reading the commands from a Dockerfile. 

Runtime vs. framework
A runtime is merely a platform for executing commands. Popular runtimes like JRE’s (Java Runtime Environment) and Node.js (a JavaScript runtime environment) process code and produce results. They do not enforce any development patterns… they merely run the code.

A framework focuses more on best practices, i.e. the way you should write code. Frameworks are typically opinionated, designed to produce predictable outcomes. For example, the Express framework is an opinionated way to create a web server that runs on the Node.js runtime. Without this framework, it is still possible to create a web server from scratch upon Node.js….. but it can be time consuming and requires you to know all of the nuances of how a web server works. Frameworks are often used to fill knowledge gaps or simply make developers more efficient by providing reliable/predictable outcomes.

[ref](https://www.quora.com/What-is-the-difference-between-a-runtime-and-a-framework?share=1)
    
### Elastic Container Service (ECS)
ECS is used for automating deployment, scaling and managing your containerized applications. 

Amazon Elastic Container Service (Amazon ECS) is a highly scalable, fast container management service that makes it easy to run, stop, and manage containers on a cluster. Your containers are defined in a task definition that you use to run individual tasks or tasks within a service. In this context, a service is a configuration that enables you to run and maintain a specified number of tasks simultaneously in a cluster. You can run your tasks and services on a serverless infrastructure that is managed by AWS Fargate. Alternatively, for more control over your infrastructure, you can run your tasks and services on a cluster of Amazon EC2 instances that you manage. 

ECS is an orchestration service used for automating deployment, scaling, and managing of your containerized applications. ECS works well with Docker containers by:

    launching and stopping Docker containers
    scaling your applications
    querying the state of your applications

Tips

    ECS falls under the Compute section on the AWS Management Console.
    You can schedule long-running applications, services, and batch processeses using ECS.
    Docker is the only container-runtime platform supported by Amazon ECS. Other container-runtime tools available in the insdustry are Rocket, LXD, OpenVZ, any a few more.


Assume you have a multi-container application that you want to run on the cloud. You may also require to scale the containers automatically based on the incoming traffic in such a case.

Amazon ECS deploys, manages, and scales containers based on your resource needs and supports other AWS services like Elastic Load Balancing, EC2 security groups, EBS volumes, and IAM roles.



    Task definition
    A task definition describes the application requirements concerning containers, such as the max amount of total CPU and memory used for the task (not for the individual container) and container definitions.

    ECS offers to create a task definition using either the AWS Fargate or AWS EC2. AWS Fargate is priced based on the task size, whereas the EC2 service is priced based on computing resource usage.


    ECS cluster
    A cluster is a set of containers running task requests within an AWS region. A default cluster gets created when you create and run your first task definition.

    Container agent
    It is a utility that connects container instances to one of your clusters. Each container instance runs a container agent.

    Container instance
    A container instance is an EC2 instance that is registered into any of your ECS clusters.


### AWS management

Logging in the Cloud

Logging provides visibility into your cloud resources and applications. For applications that run in the cloud, you will need access to logging and auditing services to help you proactively monitor your resources and applications.

Logging allows you to answer important questions like:

    How is this server performing?
    What is the current load on the server?
    What is the root cause of an application error that a user is seeing?
    What is the path that leads to this error?

#### Cloud Trail
Cloud Trail allows you to audit (or review) everything that occurs in your AWS account. Cloud Trail does this by recording all the AWS API calls occurring in your account and delivering a log file to you.
AWS CloudTrail is a service that enables governance, compliance, operational auditing, and risk auditing of your AWS account. With CloudTrail, you can log, continuously monitor, and retain account activity related to actions across your AWS infrastructure. CloudTrail provides event history of your AWS account activity, including actions taken through the AWS Management Console, AWS SDKs, command line tools, and other AWS services. This event history simplifies security analysis, resource change tracking, and troubleshooting. In addition, you can use CloudTrail to detect unusual activity in your AWS accounts. These capabilities help simplify operational analysis and troubleshooting.

Features

CloudTrail provides event history of your AWS account activity, including:

    who has logged in
    services that were accessed
    actions performed
    parameters for the actions
    responses returned

This includes actions taken through the AWS Management Console, AWS SDKs, command line tools, and other AWS services.

Tips

    Cloud Trail is found under the Management & Governance section on the AWS Management Console.
    CloudTrail shows results for the last 90 days.
    You can create up to five trails in an AWS region.

#### Cloud Watch

Cloud Watch is a service that monitors resources and applications that run on AWS by collecting data in the form of logs, metrics, and events.
Cloud Watch can collect and track metrics, collect and monitor log files, and create triggers to run your AWS resources.  
Amazon CloudWatch monitors your Amazon Web Services (AWS) resources and the applications you run on AWS in real time. You can use CloudWatch to collect and track metrics, which are variables you can measure for your resources and applications.

The CloudWatch home page automatically displays metrics about every AWS service you use. You can additionally create custom dashboards to display metrics about your custom applications, and display custom collections of metrics that you choose.

You can create alarms that watch metrics and send notifications or automatically make changes to the resources you are monitoring when a threshold is breached. For example, you can monitor the CPU usage and disk reads and writes of your Amazon EC2 instances and then use this data to determine whether you should launch additional instances to handle increased load. You can also use this data to stop under-used instances to save money.

With CloudWatch, you gain system-wide visibility into resource utilization, application performance, and operational health. 
Features
There are several useful features:

    Collect and track metrics
    Collect and monitor log files
    Set alarms and create triggers to run your AWS resources
    React to changes in your AWS resources

Tips

    CloudWatch is found under the Management & Governance section on the AWS Management Console.
    Metrics are provided automatically for a number of AWS products and services.

#### Infrastructure as Code

Infrastructure as Code allows you to describe and provision all the infrastructure resources in your cloud environment. You can stand up servers, databases, runtime parameters, resources, etc. based on scripts that you write. Infrastructure as Code is a time-saving feature because it allows you to provision (or stand up) resources in a reproducible way.

Infrastructure as code (IaC) is the process of managing and provisioning computer data centers through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools, The IT infrastructure managed by this process comprises both physical equipment, such as bare-metal servers, as well as virtual machines, and associated configuration resources. The definitions may be in a version control system. It can use either scripts or declarative definitions, rather than manual processes, but the term is more often used to promote declarative approaches

Cloud Formation

AWS Cloud Formation allows you to model your entire infrastructure in a text file template allowing you to provision AWS resources based on the scripts you write.
AWS CloudFormation is a service that helps you model and set up your Amazon Web Services resources so that you can spend less time managing those resources and more time focusing on your applications that run in AWS. You create a template that describes all the AWS resources that you want (like Amazon EC2 instances or Amazon RDS DB instances), and CloudFormation takes care of provisioning and configuring those resources for you. You don't need to individually create and configure AWS resources and figure out what's dependent on what; CloudFormation handles that. 

Tips

    Cloud Formation is found under the Management & Governance section on the AWS Management Console.
    Cloud Formation templates are written using JSON or YAML.
    You can still individually manage AWS resourceAWS Command Line Interface (CLI)

#### Access AWs through CLI

The AWS CLI (or Command Line Interface) allows you to access and control services running in your AWS account from the command line. To use the CLI, simply download, install, and configure it.

Tips

    The AWS CLI allows you to work with AWS services in a programmatic manner



