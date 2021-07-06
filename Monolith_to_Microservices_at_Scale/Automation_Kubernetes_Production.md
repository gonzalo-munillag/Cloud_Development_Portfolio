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

Overview

Kubernetes YAML files have many possible configurations and are very open-ended. The solution I have is one example of how we can set up our files.

Some key areas to note are that:

    kind: Deployment and kind: Service denotes how Kubernetes will process the file.
    replicas specifies the number of replicas that we want. This corresponds to the number of pods that will be created for one deployment.
    containers in deployment.yaml specifies the source for our Docker image


At this point, we have a Kubernetes cluster set up and understand how YAML files can be created to handle the deployment of pods and expose them to consumers. Moving forward, we’ll be using the Kubernetes command-line tool, kubectl, to interact with our cluster.
Interacting With Your Cluster

    Install kubectl
    Set up aws-iam-authenticator
    Set up kubeconfig

Loading YAML files

    kubectl apply - create deployment and service

kubectl apply -f deployment.yaml

Introductory Commands

kubectl provides a wide range of commands to interact with Kubernetes. The following are some basic commands that we can use to interact with our current cluster.

    kubectl get pods - show the pods in the cluster
    kubectl describe services - show the services in the cluster
    kubectl cluster-info - display information about the cluster
    aws eks --region <region> update-kubeconfig --name <K8s cluster name> - it takes the aws cluster and binds it with jubectl commands
    
We will be interfacing with our Kubernetes cluster with the Kubernetes command-line tool kubectl. The YAML files that we created will be loaded through this tool.
    
Key Points

By loading these configuration files to the Kubernetes cluster, we have set up Kubernetes to pull the Docker image from DockerHub.

To verify the functionality, we can run the commands kubectl get pods and kubectl describe services.
    
 Alternative Deployment Strategies

Kubernetes is one solution for deploying your containers. It's packed with features but can sometimes be overwhelming. As we've mentioned before, choosing a tool comes with its own set of tradeoffs. Here are a few other popular technologies that are used in the industry today.

    AWS EKS AWS' proprietary solution that predates AWS EKS. It integrates very well with other AWS tools and is a bit more straightforward as it is not as feature-packed as Kubernetes.

    AWS Fargate AWS tool that helps streamline deploying containers to ECS and EKS.

    Docker It's an option to simply run the container manually with Docker. Sometimes, it's tempting to pick a shiny hot tool that may lead to overengineered architectures.

To attach to a container in a pod, we can use the following command:

kubectl exec -it {pod_name} /bin/bash

This is a powerful tool that allows us to run and test commands directly inside the context of our pods.

Similar to the command that we used with Docker, we don’t want to rely on this command for modifying the code or state that’s running inside of the pod. The command should only be used for troubleshooting. Pods are ephemeral and we should create a new image to address any changes.

"ps aux" is a command that can be run in a pod to check that it is running
    
# Production

Kubernetes has configurations that can be tuned to optimize your deployed application.
Cost

    Configure the resources and replicas for our deployed applications.

Security

    Configure who has access to the Kubernetes pods and services.
    Secure traffic for least-privilege

A reverse proxy proxy is used to route traffic from one endpoint to multiple endpoints
Reverse Proxy

    A single interface that forwards requests on behalf of the client and appears to the client as the origin of the responses.
    Useful for abstracting multiple microservices to appear as a single resource.

API Gateway

A form of a reverse proxy that serves as an abstraction of the interface to other services.
Sample Reverse Proxy

    Nginx is a web server that can be used as a reverse proxy. Configurations can be specified with an nginx.conf file.

    Sample bare-bones nginx.conf file:

events {
}
http {
  server {
      listen <PORT_NUMBER>;
      location /<PROXY_PATH>/ {
          proxy_pass http://<REDIRECT_PATH>/;
      }
  }
}

<img width="732" alt="Screenshot 2021-07-06 at 19 56 19" src="https://user-images.githubusercontent.com/57599753/124645865-3d4e4d80-de94-11eb-92c3-fba3d18fe40a.png">

<img width="732" alt="Screenshot 2021-07-06 at 20 08 21" src="https://user-images.githubusercontent.com/57599753/124647185-eb0e2c00-de95-11eb-8adf-354dfc2168f5.png">

Both are used to abstract common code, recudes complexity of the code.

Library contains common code that must be imported into our service, the logic is abstracted there is overhaed of managing the library, eg, version has to be consistent. The libraries are limited to the same programming language. 

API garteway is an abstraction of the interface, the common code and common logic is limited to inputs and outputs. We are unable to use an APi gateway for logic that may happen exclsuisvely inside a microservice. The points of abstraction are not as flexible as a library, but but we inly need to implement the logic once and the microservice it points do not need to care. since an API gateway is its own service, it has its own tech stack. This means that even if we have two microservices using different programming languages, we can still have an abstraction of common logic.


Given a large organization, how may a dedicated team working on an API Gateway (type of reverse proxy) be beneficial from a technical and business perspective?An API Gateway can be considered its own business functionality. This will allow another team to work on its features in parallel to the services that it would route to. It would also reduce the responsibilities of individual teams by abstracting common logic that may be non-trivial to design and implement.




