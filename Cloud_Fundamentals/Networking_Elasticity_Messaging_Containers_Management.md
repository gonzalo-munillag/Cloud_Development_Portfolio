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
    A simple use case: Assume you are running a microservices-architecture based application. An Application Load Balancer allows you to host the different API endpoints of your application on different servers. The load balancer then redirects the incoming HTTP/HTTP traffic to the suitable server based on the rules you specify in the configuration.

    If you choose this option, you will be taken to a six-step process:
        Configure Load Balancer
        Configure Security Settings
        Configure Security Groups
        Configure Routing
        Register Targets
        Review


    
    
    
    
    
    
    
