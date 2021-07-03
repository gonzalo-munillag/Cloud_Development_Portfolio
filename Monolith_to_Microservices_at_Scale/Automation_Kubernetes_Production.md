# Automation

Continuous Integration 	practice of streamlining developer code to a centralized source
Continuous Deployment 	practice of streamlining how code is released
Least Privileged Access 	providing the least amount of permissions necessary
YAML 	Yet another markup language a common way to programmatically write configurations. Sometimes referred to as YML.

Deploying environments: development -> staging -> production
#Deployment pipeline: commit -> build (docker) -> testing -> deploy (containers)

A deployment pipeline may contain stages for committing, building, testing, and deploying code

    We now have industry standards and tools for how we can deploy our code.
    Docker containers simplify what we deploy.
    Deployment pipelines simplify how we deploy Docker containers.
    Code is often deployed multiple times to different environments to validate functionality and minimize bugs.
    Deployment pipelines enable us to have an automated process that is reliable and reproducible.

Code After Coding

Once your code is done, how do you ship it? Typically, the software development cycle will proceed with building the code, installing all of the dependencies, running automated tests, manually testing, and then repeating for each development environment the application needs to be deployed to.

    It’s a common fallacy to underestimate the time it takes to deploy code
    Teams deploying enterprise software often involves many internal and external dependencies that may include: infrastructure changes, security changes, permissions provisioning, load testing

<img width="664" alt="Screenshot 2021-07-03 at 10 05 15" src="https://user-images.githubusercontent.com/57599753/124347686-2b478300-dbe6-11eb-8cbf-643557135c7e.png">

CI/CD enables us to have a streamlined process for how our code transforms from being written to being deployed to production.
Continuous Integration

Continuous Integration: Process in which code is tested, built into a Docker image, and deployed to a container registry.
Continuous Deployment: Process in which our Docker image is deployed to containers.
Additional Benefits: By streamlining our build and deploy to an automated process, developers are provided the least privilege that they need to write their code.


<img width="732" alt="Screenshot 2021-07-03 at 10 10 59" src="https://user-images.githubusercontent.com/57599753/124347850-f8ea5580-dbe6-11eb-8c8b-c586db01ab6e.png">

<img width="664" alt="Screenshot 2021-07-03 at 10 10 40" src="https://user-images.githubusercontent.com/57599753/124347843-eec85700-dbe6-11eb-8435-23ddb31025f2.png">

Term 	Definition
Continuous Integration 	practice of streamlining developer code to a centralized source
Continuous Deployment 	practice of streamlining how code is released
Least Privileged Access 	providing the least amount of permissions necessary

[The art of shipping early and often](https://www.ycombinator.com/library/40-the-art-of-shipping-early-and-often)

A new Docker container is created to use the latest Docker image. - Continuous Deployment

Reduce overhead of managing code after development is completed. - Both CI and CD

Code is built automatically into a Docker image. - Continuous Integration

Why do non-technical individuals at a business care about using CI/CD?

    Security
    Cost
    Time

Key Points

    CI/CD allows for a tight feedback loop
    Bugs are inevitable -- CI/CD helps us identify them in a deployed environment
    CI/CD makes the pipeline more available

By using a CI/CD pipeline, we reduce the risk of failed deployments from user error. All of these steps can become automated. If there is an issue with the deployed code, a user can revert the changes with an older container rather than backtracking by using older code and downgrading packages and dependencies.

    Reduce risk of failed deployments
    Connecting to a production environment is a security risk
    Backing up the code is not always a comprehensive backup of the existing state since we may have other dependencies such as databases
    Packages and dependencies may have to be downgraded and would introduce downtime

By using a CI/CD pipeline, we reduce the risk of failed deployments from user error. All of these steps can become automated. If there is an issue with the deployed code, a user can revert the changes with an older container rather than backtracking by using older code and downgrading packages and dependencies.

    Reduce risk of failed deployments
    Connecting to a production environment is a security risk
    Backing up the code is not always a comprehensive backup of the existing state since we may have other dependencies such as databases
    Packages and dependencies may have to be downgraded and would introduce downtime

TRAVIS CI

Code repository -> Travis CI -> Container Repository

    Travis is a tool that helps us with the CI process
    Travis integrates with your application using a YAML file
    YAML files are often used to specify configurations.
    Travis can be used to build and push images to DockerHub

YAML
Yet another markup language a common way to programmatically write configurations. Sometimes referred to as YML.

YAML is similar to how JSON is also used as a representation of data but YAML is considered more readable.

    YAML is generally suited for configuration files
    YAML is generally suited for expressing data.

When used as configurations, they are often interchangeable. The examples below show how a YAML file can be represented as JSON.

Environment Variables

Environment variables are a useful way to handle variables that shouldn’t be hard-coded into our application. These values are often credentials that shouldn’t be stored in the code.
Environment Variables with Travis

Travis provides a way to set environment variables without having them exposed. These values will be used during the Travis build process.

    In your TravisCI dashboard, navigate to a repository
    Navigate to the Settings screen
    Set values in Environment Variables

Different phases of our software development lifecycle can take advantage of environment variables. Travis, our tool for CI, enables us to set environment variables on a per-repository basis in the settings.

Services like Travis have a business model based on the number of builds processed. What are some strategies in setting up your code in Git so that not every push will trigger a build?

Use a separate branch for different features

    Specify what kind of git action should trigger a build

One strategy is to utilize the master branch for when your code is in a ready state. Use a separate branch while your code is still in active development and before it’s ready to be built into a Docker image. This provides flexibility in how we configure our build process: we can have different branches that Travis won’t automatically build and can have different environment variables configured for different branches.

Docker is more-or-less the defacto standard for containers. Build tools, on the other hand, aren’t as standardized. Travis is one of many CI/CD tools that are popular. Other ones include Jenkins, CircleCI, AWS CodeBuild. You may choose one depending on your business needs.

    Jenkins - most flexible but more overhead of setup
    CircleCI - alternative to Travis CI with many competing features
    AWS CodeBuild - integrates easily with other AWS tools

# Kubernetes

Orchestration is the automated management of the lifecycle of our application

    With CI/CD, if Travis is our CI tool, then Kubernetes is our CD tool
    Orchestration helps us handle complicated workflows in deploying our application
    Helps us automate our deployment process for continuous deployment

A service is an abstraction of pods and pods are abstractions of containers

New Terms
Term 	Description
Horizontal Scaling 	Handling increased traffic by creating additional replicas so that traffic can be divided across the replicas
Kubernetes Service 	An abstraction of a set of pods and interface for how to interact with the pods
Pods 	A set of containers that are deployed together
Load Balancing 	Handling traffic by distributing it across different endpoints
Replica 	A redundant copy of a resource often used for backups or load balancing
Consumer 	An external entity such as a user or program that interfaces with an application

Key Points

    AWS EKS is a service that we can use to set up Kubernetes.

    The deployment.yaml file is used to specify how our pods should be created.
    The service.yaml file is used to specify how our pods are exposed.

Creating an EKS Cluster

    Create cluster in EKS
    Create and specify role for Kubernetes cluster
    Enable public access

Creating a Node Group

    Add Node Group in the newly-created cluster
    Create and specify role for IAM role for node group
    Create and specify SSH key for node group
    Set instance type to t3.micro for cost-savings as we learn how to use Kubernetes
    Specify desired number of nodes

Docker images are loaded from the container registry into Kubernetes pods. Access to the pods are exposed to consumers through a service.

<img width="732" alt="Screenshot 2021-07-03 at 17 40 18" src="https://user-images.githubusercontent.com/57599753/124359530-bd22b080-dc25-11eb-8f3f-e7b8cac0b116.png">




# Production
