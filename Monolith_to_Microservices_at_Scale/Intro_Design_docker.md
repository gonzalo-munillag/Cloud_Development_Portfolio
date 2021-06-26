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



# Docker

