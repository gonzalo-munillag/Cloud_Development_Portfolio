# Introduction

Microservices: Independently-deployed services that communicate with one another through networks.

Monoliths: self-contained applications that are deployed as one unit.

Monolith

    Utilize a powerful, more costly machine
    Codebase is centralized and easy manage
    Code is easily shared across the project
    Scoped for worst-case usage across all parts of the application

Microservice

    Utilize smaller, cost-effective machines for what we need
    Flexibility to implement logic in a way that makes sense for the team and business
    Lean to be targeting a specific business purpose
    Interfaces set up for building out other applications
    Try not to overcommit and pay for resources that aren't needed

Glossary
Term 	Definition
Dependency Graph 	A diagram that maps out the relationships between components to understand which parts of the system rely on the other
Fault Tolerance 	The ability to continue operating in the event of a failure
Horizontal Scaling 	Scaling by adding more machines
Module 	Program that is logically grouped together to execute a specific functionality
REST 	Architectural style of communication across a network
Strangler Pattern 	Strategy of refactoring code by incrementally replacing components of the codebase
Technical Debt 	The concept of choosing an easier implementation of software that will need to be reworked
Vertical Scaling 	Scaling by increasing the capacity of existing machines

Deploying Code is Not Easy

Deploying changes in code is non-trivial. We have to consider the impact of potential bugs, downtime, ease of deployment, and downstream effects to consumers of the application.

What you need to consider before deploying code?

    Potential bugs

    Downtime

    Downstream effects

Business Requirements Drive Teams

Teams can be organized around business needs and have a clearer focus on customer requirements. There is clear ownership on who owns what.
Teams Can Work in Parallel

Since projects are deployed independently, teams can develop and deploy code without stepping on each others' toes.
Flexibility in Technology

We are not limited to a certain technology and can choose what may work best for the business need or team.

Monoliths Are Not Bad!

Microservices designs are another architectural pattern and are not intended to replace monolith applications. We should not blindly build applications as microservices without understanding the tradeoffs. Doing so could actually decrease productivity!

One way to think about this is to revisit our analogy with the Sports Superstore. Does it make sense for every aspiring small business owner to open and manage multiple stores at once?
Considerations for Not Using Microservices

    System Complexity
    Rather than deploying a single application, we would be deploying multiple modules separately. There is more overhead in setting up projects.

    Network Latency
    By introducing a network between modules, we have increased latency in application performance and will find it harder to debug our application.

    Difficulty with Debugging
    We can no longer rely on a stack trace or tools that can help us pinpoint where a bug is. We may end up relying on logging to find causes of issues.
    
<img width="794" alt="Screenshot 2021-06-26 at 12 08 41" src="https://user-images.githubusercontent.com/57599753/123509694-43178800-d677-11eb-98d9-3b0a9d5d15ca.png">

Release Cycles

Software was often released a few times a year with large deployments. Now, containers and deployment strategies have made it possible to deploy multiple times a day with no downtime.
Team Structure

Teams were organized around technologies rather than business requirements.

Teams may have previously consisted of separate teams for Quality Assurance, Database Administrators, and Designers. Now, we may have multi-skilled teams grouped together where all of these roles can be found in a single team.
Hardware

Software was deployed to expensive mainframe computers located in data centers. Now, commodity hardware is powerful enough to run our applications. Distributed computing can help us perform large-scale data processing without the need to purchase dedicated, expensive hardware.

Release Cycles

Software was often released a few times a year with large deployments. Now, containers and deployment strategies have made it possible to deploy multiple times a day with no downtime.
Team Structure

CI/CD is a method to frequently deliver apps to customers by introducing automation into the stages of app development. The main concepts attributed to CI/CD are continuous integration, continuous delivery, and continuous deployment. CI/CD is a solution to the problems integrating new code can cause for development and operations teams (AKA "integration hell").

Specifically, CI/CD introduces ongoing automation and continuous monitoring throughout the lifecycle of apps, from integration and testing phases to delivery and deployment. Taken together, these connected practices are often referred to as a "CI/CD pipeline" and are supported by development and operations teams working together in an agile way with either a DevOps or Site reliability engineering (SRE) approach.

Teams were organized around technologies rather than business requirements.

Teams may have previously consisted of separate teams for Quality Assurance, Database Administrators, and Designers. Now, we may have multi-skilled teams grouped together where all of these roles can be found in a single team.
Hardware

Software was deployed to expensive mainframe computers located in data centers. Now, commodity hardware is powerful enough to run our applications. Distributed computing can help us perform large-scale data processing without the need to purchase dedicated, expensive hardware.

S.NO	

Supercomputer vs Mainframe Computer  
1.	Supercomputers are used for large and complex mathematical computations.	While Mainframe computers are used as a storage for large database and serve as a maximum number of users simultaneously.
2.	Supercomputer’s speed is more than Mainframe computer. It can execute billions of instructions within a second.	Mainframe computer’s speed is comparatively less than Supercomputers. In this millions of instructions are executed simultaneously.
3.	Supercomputers are the largest computers.	Mainframe computers are smaller than supercomputers in size.
4.	Supercomputers are the most costly in the world.	Mainframe computers are less costly than supercomputers.
5.	In the present, the supercomputers have Linux and their variant operating systems.	While Mainframe computers can have multiple operating systems simultaneously.
6.	Super computers are mostly purpose-built for one or a few specific institutional tasks.	Mainframe computers are built to handle a large variety of tasks.
7. 	Seymour Cray invents the Supercomputer.	The first successful mainframe computer is invented by IBM.
8.	Supercomputers can have a processing speed in the range of 100 to 900 MIPS.	Whereas Mainframe computers can have a processing speed in the range of 3-4 MIPS to as high as 100 MIPS.



# Design principles and best practices


    Microservices are an architectural style where an application is composed of modules that can be independently developed and deployed.
    In monoliths,all the components of the application are built into a single application.

Microservice Benefits

    Scale
    Lean applications that are able to tailor their logic and infrastructure to their specific business needs. More-easily architected for horizontally-scaling.
    Development in Parallel
    Teams can develop and deploy their own codebases.
    Cost Effectiveness
    Utilize resources only for what is necessary for the specific microservice.
    Flexibility Choose technologies that make the most sense for the team and business.

<img width="794" alt="Screenshot 2021-06-26 at 15 05 53" src="https://user-images.githubusercontent.com/57599753/123513885-0310cf00-d690-11eb-8830-6b693ce629e9.png">

<img width="794" alt="Screenshot 2021-06-26 at 15 06 19" src="https://user-images.githubusercontent.com/57599753/123513898-11f78180-d690-11eb-89fb-b6f8b87a8c9b.png">

Any application that can be built as a monolith can be built as a microservice. It’s up to you to weigh out the benefits of choosing one over the other. Oftentimes, microservices are harder to manage and take more investment to initially set up.

Properties of Microservices
Communication

    Services communicate through a network
    REST is currently the most-commonly used network interface

Independently Deployed

    Deployment to one service should not affect another

Fault tolerant

    Diligence in writing code that can anticipate when another microservice isn’t working

Term 	Definition
REST 	Architectural style of communication across a network
Fault Tolerance 	The ability to continue operating in the event of a failure
Vertical Scaling 	Scaling by increasing the capacity of existing machines
Horizontal Scaling 	Scaling by adding more machines


Alternatives to REST

While REST is the most popular form of network communication used for microservices, there are many other protocols that can be used. The following are some other ways microservices can communicate with one another:

    Publish-Subscribe
    Queues
    gRPC
    SOAP
    GraphQL

[GREAT REF](https://martinfowler.com/articles/microservices.html)

Which of the following scenarios below describe problems that can occur when software is built as a monolith? (may be more than one answer)

    A developer fixes a bug. Before deploying, the developer has to schedule a maintenance window for the whole company.

    Team A has to wait until Team B is completed with their changes before they can deploy their changes.

    An e-commerce website can’t load because their ads service has a bug.

Using the Strangler Pattern

Map Your Dependencies

    It's important to understand the application you're working with before breaking it apart.
    One strategy is to map out the modules and their dependencies as a directed graph to understand the downstream impact of your changes.

Where to Start?

    There’s no hard rule: choose the part of the application that makes the most sense to you.
    Dependency graph serves merely as a guideline on risk based on the number of dependencies.
    A module with the least dependencies will potentially have the downstream effects meaning less risk.

How to Start?

    The Strangler pattern is a common and effective way to migrate legacy applications.
    Rather than replacing your code with a new version, you can gradually replace components of your application.

Shared Code

    Code duplication can be abstracted into common libraries used across projects.

Key Terms - Refactoring
Term 	Definition
Dependency Graph 	A diagram that maps out the relationships between components to understand which parts of the system rely on the other
Module 	Program that is logically grouped together to execute a specific functionality
Strangler Pattern 	Strategy of refactoring code by incrementally replacing components of the codebase
Technical Debt 	The concept of choosing an easier implementation of software that will need to be reworked

[Strangler pattern](https://docs.microsoft.com/en-us/azure/architecture/patterns/strangler-fig)

[Dependency graph](https://en.wikipedia.org/wiki/Dependency_graph)

<img width="809" alt="Screenshot 2021-06-26 at 18 36 50" src="https://user-images.githubusercontent.com/57599753/123519755-7c6aea80-d6ad-11eb-9585-9d1ef4213516.png">


    Dependency graphs are one way to help us visualize and make an informed decision
    We often have to use additional context with regards to business functionality to weigh decisions
    Database complexity should also be considered for refactors. Services that seem simple may have complicated refactor strategies with their databases.

Trade-Offs

Designing software is not a binary process. There's rarely a right or wrong answer and it's often a decision of balancing both technical and business tradeoffs.

Some trade-offs include

    Cost of Infrastructure
    Time of Development
    Managing Technical Debt

Scope of Refactor

Microservices may not just be refactoring code. We also need to also consider other parts of the system including databases and infrastructure.

[Refactoring Databases](https://www.martinfowler.com/books/refactoringDatabases.html)

Microservice Benefits

    Scale
    Development in Parallel
    Cost Effectiveness
    Flexibility

Microservice Properties

    Communication
    Independently Deployed
    Fault tolerant

Refactor Strategies

    Dependency Graph as a starting point to understand downstream effects of modules
    Strangler Pattern as an approach to how we gradually refactor our code in pieces

# Docker


Your Code is Not a Black Box...Yet

    Applications often require many packages and dependencies to run properly
    It’s common for an application to work on one computer but not another

Deployment Headaches

    Organizations often have different development environments. These often include development and production.
    Deploying and testing the same code across different environments can be cumbersome
    In practice, it’s difficult to keep a development and production environment perfectly synchronized with regards to their versions, operating systems, dependencies, etc.
    It is common for code to work in a development environment and not behave as expected in production

Your Code is Now Kind of a Black Box

    Containers are self-contained applications with all the dependencies needed to run
    Containers can be treated as one unit of deployment
    Rolling back code with containers is simply re-deploying an older snapshot

Why Kind of?

    Containers make things easier but don’t magically make deployment problems disappear
    Code may still work in one environment and fail in another, though now we have an understanding of what might have failed

Containers are Ephemeral

    Containers should be stateless and are expected to be destroyed.

Containers Help Manage Dependencies

    Each container can be running its own versioned software. We resolve the issue where different applications may have different dependencies.

Simplify Deployment

    Containers are self-contained so deployment is simply swapping out an existing container with a new one.

<img width="809" alt="Screenshot 2021-06-26 at 19 06 11" src="https://user-images.githubusercontent.com/57599753/123520552-95759a80-d6b1-11eb-833e-49374f9b91e8.png">

[Docker vs. Virtual Machines](https://cloudacademy.com/blog/docker-vs-virtual-machines-differences-you-should-know/)

<img width="794" alt="Screenshot 2021-06-26 at 19 08 00" src="https://user-images.githubusercontent.com/57599753/123520673-0fa61f00-d6b2-11eb-8031-cf79b16714b3.png">

<img width="550" alt="Screenshot 2021-06-26 at 21 02 48" src="https://user-images.githubusercontent.com/57599753/123523106-edb49880-d6c1-11eb-8cfa-b8029e952ae0.png">

Overview

Docker is a platform that helps us manage the process of creating and managing our containers.
Docker Image

When we have an application that we want to deploy, we can package it into a Docker Image. The image contains all of your code and dependencies.
Docker Container

A Docker Container is an ephemeral running instance of a Docker Image.
Dockerfile

A Dockerfile defines the steps to create a Docker Image.

Sample Dockerfile

        # Use NodeJS base image
        FROM node:13

        # Create app directory in Docker
        WORKDIR /usr/src/app

        # Install app dependencies by copying
        # package.json and package-lock.json
        COPY package*.json ./

        # Install dependencies in Docker
        RUN npm install

        # Copy app from local environment into the Docker image
        COPY . .

        # Set the API’s port number
        EXPOSE 8080

        # Define Docker’s behavior when the image is run
        CMD ["node", "server.js"]

Basic Commands:

    docker build -t name_image . will run the Dockerfile to create an image
    docker images will print all the available images
    docker run {IMAGE_ID} will run a container with the image
    docker ps will print all the running containers
    docker kill {CONTAINER_ID} will terminate the container

Key Terms - Docker
Term 	Definition
Base Image 	A set of common dependencies built into a Docker image that acts as a starting point to build an application’s Docker images to reduce build times
Container 	Grouped software dependencies and packages that make it easier and more reliable to deploy software
Container Registry 	A centralized place to store container images
Docker-compose 	A tool used to run multiple Docker containers at once; often used to specify dependent relationships between containers
Dockerfile 	A file containing instructions on how to translate an application into an image that can be run in containers
Ephemeral 	Software property where an application is expected to be short-lived
Image 	A snapshot of dependencies and code used by Docker containers to run an application

<img width="824" alt="Screenshot 2021-06-26 at 21 17 42" src="https://user-images.githubusercontent.com/57599753/123523466-ff973b00-d6c3-11eb-98f8-f1bf3323ce6e.png">

[Best practices for writing Dockerfiles](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)

In general, troubleshooting is the identification or diagnosis of "trouble" in the management flow of a system caused by a failure of some kind. The problem is initially described as symptoms of malfunction, and troubleshooting is the process of determining and remedying the causes of these symptoms. <img width="824" alt="Screenshot 2021-06-26 at 22 16 02" src="https://user-images.githubusercontent.com/57599753/123524658-193c8080-d6cc-11eb-9969-b06f0caa237b.png">

You can troubleshoot inside a container

Container Registry

    A container registry serves as a centralized place for us to store and version our images.

DockerHub

    DockerHub is a popular container registry run by the same organization that created Docker.

Base Images

    Base images reduce time that it takes to run redundant operations.

<img width="824" alt="Screenshot 2021-06-26 at 22 58 13" src="https://user-images.githubusercontent.com/57599753/123525571-fdd47400-d6d1-11eb-8720-e977b5c1e98a.png">

In the build and deploy process, building Docker Images can take up most of the time. One strategy to reduce build times is to utilize a base image. This reduces redundant operations that might stay the same across multiple builds. For example, if you are building a new Docker image with a few lines of new application logic, we may find the build time frustrating.


Solution Recap

    Our original Dockerfile contained a lot of code to install NodeJS that takes a long time to run.

    Installing NodeJS is a redundant operation -- it shouldn't need to be reinstalled every time we build an image because we don’t expect to make changes to it.

    By using a base image that has NodeJS installed, we can reduce the amount of time it takes to build an image for NodeJS and our application’s code. We would use a pre-existing image that already has NodeJS and just build on top of it for the application’s code.

My Strategy

First, create a base image:

    Take the the block of code that installs the NodeJS dependencies and save it as a new Dockerfile (see below)

    Build the Docker image and name it slow-node-base

    Create a DockerHub repository for slow-node-base

    Tag slow-node-base and add it to the DockerHub registry

    docker tag slow-node-base <YOUR_DOCKER_HUB>/slow-node-base
    docker push <YOUR_DOCKER_HUB>/slow-node-base


Then, use the base image in our application.

    Take a new copy of the starter Dockerfile and remove all of the code to install the dependencies, leaving only the custom logic of the application

    Use the base image we just created by linking it using the FROM command:

    FROM <YOUR_DOCKER_HUB>/slow-node-base:latest

    Build the new image.

    docker build -t slow-node .

Notice how much more quickly the image is built since we essentially removed the overhead of installing NodeJS!
