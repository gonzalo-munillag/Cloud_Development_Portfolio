
Content and notes from Udacity course on Cloud Development:

## Cloud Computing

Cloud Computing is the delivery of IT resources over the Internet. The cloud is like a virtual data center accessible via the Internet that allows you to manage:

    Storage services likes databases
    Servers, compute power, networking
    Analytics, artificial intelligence, augmented reality
    Security services for data and applications

Characteristics of Cloud Computing

    Pay as you go - You pay only for what you use and only when your code runs.
    Autoscaling - The number of active servers can grow or shrink based on demand.
    Serverless - Allows you to write and deploy code without having to worry about the underlying infrastructure.
    
What is serverless computing?

Serverless computing enables developers to build applications faster by eliminating the need for them to manage infrastructure. With serverless applications, the cloud service provider automatically provisions, scales and manages the infrastructure required to run the code.

It is important to note that servers are still running the code. The serverless name comes from the fact that the tasks associated with infrastructure provisioning and management are invisible to the developer. This approach enables developers to increase their focus on the business logic and deliver more value to the core of the business.

What is a microservice?

Imagine taking an application, chopping it up into pieces, and running it as a collection of smaller parts instead of one monolithic whole. That's basically what a microservices architecture is. Each piece of the application is called a 'microservice,' and it performs one service only, runs independently of the other parts of the application, operates in its own environment, and stores its own data. Despite the name, microservices do not have to be small. What makes them 'micro' is that they only handle one service and are part of a larger application.

What is the difference between a microservice and a serverless function?

This distinction is still being defined by the tech community, but typically, a microservice is larger and can do more than a function. A function is a relatively small bit of code that performs only one action in response to an event. Depending on how developers have divided up an application, a microservice may be equivalent to a function (meaning it performs only one action), or it may be made up of multiple functions.

### Types of Cloud Computing

Infrastructure-as-a-Service (IaaS)
The provider supplies virtual server instances, storage, and mechanisms for you to manage servers. E.g. AWS, or Rackspace

Platform-as-a-Service (PaaS)
A platform of development tools hosted on a provider's infrastructure. E.g. Sales force, GoDaddy

GoDaddy is (Ref)[https://www.quora.com/What-does-GoDaddy-do?share=1]:
  Domain Registrar

  A domain registrar is a company or entity that is responsible for handing the sale, registration and management of domain names, a domain registrar must be an ICANN Accredited Registrar to be allowed access to the domain registry that they will interface with in order to push the "Hey, john doe just purchased http://johndoerocks.com

  and it points to this IP Address" messages out to the main DNS servers on the internet, which will then in turn propagate that information out to all the other DNS servers that request that information.

  Web Hosting

  A Web Host is someone who sets up, manages and sell space on web servers, this is a program that accepts requests from web browsers and deliver web pages (very simplified), you usually purchase a pre-packaged plan that includes X amount of gigabytes of space and transfer per month, this allows users to pick the plan that fits their needs.

  Web Hosts usually bundle Email hosting along with web hosting.

  Email Hosting

  Email hosting is the act of setting up and maintaining an email server that users will use to send and receive emails, you usually get a form of webmail software along with the hosting service

Software-as-a-Service (SaaS)
A software application that runs over the Internet and is managed by the service provider. E.g. Gmail

Amazon Web Services (AWS) provides a mix of infrastructure as a service (IaaS), platform as a service (PaaS) and packaged software as a service (SaaS)

Cloud Deployment Models

  Public Cloud
  A public cloud makes resources available over the Internet to the general public.

  Private Cloud
  A private cloud is a proprietary network that supplies services to a limited number of people. "On-premises" or "on-prem" best describes a private cloud.

  Hybrid Cloud
  A hybrid model contains a combination of both a public and a private cloud.

  The hybrid model is a growing trend in the industry for those organizations that have been slow to adopt the cloud due to being in a heavily regulated industry. The hybrid model gives organizations the flexibility to slowly migrate to the cloud. It is also interesting to use it for Personal Identifiable Information (Stored in an on-premises database) while using services from the public cloud to manage that data, e.g., with a web application served publicly.
  
### Benefits

There are several benefits to the cloud.

    Stop guessing about capacity.
    Avoid huge capital investments up front.
    Pay for only what you use.
    Scale globally in minutes.
    Deliver faster.
    Innovate faster.
    Fail fast.
  
### Cloud Based Products
Amazon Web Services offers a broad set of global cloud-based products.

Analytics

    Quick Sight
    Athena
    Redshift

Application integration

    Simple Queue Service (SQS)
    Simple Notification Service (SNS)

Cost management

    AWS Budgets

Compute services

    Elastic Cloud Compute (EC2)
    Lambda
    Elastic Beanstalk

Database management services

    MySQL
    Oracle
    SQLServer
    DynamoDB
    MongoDB

Developer tools

    Cloud 9
    Code Pipeline

Security services

    Key Management Service (KMS)
    Shield
    Identity and Access Management (IAM)

Additional Services

    Blockchain
    Machine Learning
    Computer Vision
    Internet of Things (IoT)
    AR/VR

### Global Infrastructure

Region
A region is considered a geographic location or an area on a map.
Regions are independent and do not replicate the deployed resources across regions.

Availability Zone
An availability zone is an isolated location within a geographic region and is a physical data center within a specific region.
So there are many independent data centers in a region, their failure is also independent. 

Edge Location
An edge location is as a mini-data center used solely to cache large data files closer to a user's location.

Additional Information

    There are more Availability Zones (AZs) than there are Regions.
    There should be at least two AZs per Region.
    Each region is located in a separate geographic area.
    AZs are distinct locations that are engineered to be isolated from failures.

[Refs](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/)

<img width="792" alt="Screenshot 2021-05-05 at 20 37 01" src="https://user-images.githubusercontent.com/57599753/117192121-a6a4d800-ade1-11eb-8276-fda0ae605db5.png">



AWS is responsible for:

    Securing edge locations
    Monitoring physical device security
    Providing physical access control to hardware/software
    Database patching
    Discarding physical storage devices

You are responsible for:

    Managing AWS Identity and Access Management (IAM)
    Encrypting data
    Preventing or detecting when an AWS account has been compromised
    Restricting access to AWS services to only those users who need it
