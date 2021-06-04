## Cloud basics

#### Key Terminology

Data

We store digital data as bytes on physical media like hard drives, but in the cloud, we use systems to simplify this for us.

Filestore or Filesystem: A system to save, archive, and recall specific documents and media. Usually, a file store offers low cost per unit space optimized for larger files.

Database: A system to save and organize complex data models. They often use more advanced data structures to index and organize data for faster lookup time. Databases are compelling solutions for data models that have complicated relationships.

Compute

Any computer operation requires some computation on a CPU (central processing unit).

Server: A specialized computer for cloud and web services.

Instance: A computational unit which may be a physical server or a virtual server that is abstracted by a cloud service.

Cluster: A collection of instances which perform the same function. It may be used to distribute workloads.

Autoscaling Group: A type of cluster that can increase or decrease the number of instances based on demand.

Scale out: more computers to support more data means and more concurrency.

Scale up: make a computer bigger, with more memory and processing.

#### Monolithic vs. loosely coupled systems

Tightly coupled: quick to stand-up, but may result in higher technical debt. 
All the components of the system are dependent on each other. With loosely coupled, they become more independent and may use microservices. 

Loosely coupled systems are recommended over monolithic systems, as they reduce technical debt.

Technical Debt

The cost (in time and resources) of additional code rework caused by choosing an easy solution now instead of using a better approach that would take longer to implement.

Microservices

Microservices are individual specialized systems (software deployed on specialized infrastructure) designed to accomplish a specific task. Specific tasks may include things like authentication, image processing, or data management.


#### Request responses and APIs

Basic handshackes betwen client and server. So we have an standardized interface. This way, we make sure they can send data back and forth.

###### The client makes a REQUEST to the server. 

Example: https://www.udacity.com/school-of-cloud-computing

1.  
https - this is the protocol (Hypertext Transfer Protocol). It announces the "language" the client and server should be speaking. HTTPS is a secure way of end-to-end communication using the communication protocols (before) SSL or TLS.
HTTP means we send hypetext type of information. 
You can also have: file (interface with the file system of your local OS) and ftp (transfer files over a network)


Hypertext is text displayed on a computer display or other electronic devices with references (hyperlinks) to other text that the reader can immediately access. Hypertext documents are interconnected by hyperlinks, which are typically activated by a mouse click, keypress set, or screen touch. Apart from text, the term "hypertext" is also sometimes used to describe tables, images, and other presentational content formats with integrated hyperlinks. Hypertext is one of the key underlying concepts of the World Wide Web, where Web pages are often written in the Hypertext Markup Language (HTML). As implemented on the Web, hypertext enables the easy-to-use publication of information over the Internet.
[ref](https://en.wikipedia.org/wiki/Hypertext)

2.  
www.udacity.com  
www: subdomain  
udacity.com: domain name  

This tells the system where we want to route traffic to. So that the request arrives to the desired server.  
It could also be an IP address, like 192.168.1.1, or a **localhost** (The code runs in our local machine.). 

3.  
school-of-cloud-computing: Path.  
The path tells the server which resources are we atrying to get.

Other more inricate examples:  
https://sub.domain.com:port/where/file.html?query=param#frag

port: what network port to route the traffic through. Eg. 80: general web traffic, 8080 is an alternative, and 5432 used when working with databases.

The file extention, file.html: what type of file we have. 

?query=param: query variables we pass to the server

#frag: fragments. Useful for dealing with front-end location of where the information resides. 

Additonal data may be sent with a request:  
Headers. Allows to inlcude content type, type of file and what kind of file we are sending. Authorization headers, allows to send tokens or passwords securely to make sure we can execute a set of actions in the server.   
Request body payload. Tell us what data we are sending to a server.
Request types: What kind of command are we issuing.   
  GET
  POST
  PATCH
  DELETE
              
###### The server sends a RESPONSE to the client. 
            
A response can be any kind of data: HTML, css, JavaScript, images, video, other media.
A response may also include headers: The Multipurpose Internet Mail Extensions (MIME) type is a standardized way to indicate the nature and format of a document. It is defined and standardized in IETF RFC 6838. The Internet Assigned Numbers Authority (IANA) is the official body responsible for keeping track of all official MIME types, and you can find the most up-to-date and complete list at the [Media Types page](https://www.iana.org/assignments/media-types/media-types.xhtml).
Browsers often use the MIME type (and not the file extension) to determine how it will process a document; it is therefore important that servers are set up correctly to attach the correct MIME type to the header of the response object.

A response may also include Status codes: They inform in a standardized way how the request went.          
Standardized HTTP Status Codes.
No one expects you to remember every status code by heart. What's important is that you give some thought to the codes you're using in your systems. Here’s a good reference list of all [HTTP status codes](https://www.restapitutorial.com/httpstatuscodes.html).


#### Develop

##### Server
Computer connected to a network. One can communicate with it and make it perform tasks. A cloud server is the same but it is managed by someone else.

A server is made out of: Motherboard, RAM, CPU, Network card, GPU, PSU (power supply), Chassis, HDD (hard disk drive), keyboard and SW on a personal computer.

In a typical personal computer (PC), the CPU is contained within a microprocessor, which is a single chip and today most of the CPUs are implemented as microprocessors. But in large workstations CPU would be made up of single or more printed circuit boards. Modern CPUs come as a component that could be easily connected to the CPU. It is a small, square in shape, and contains metallic pins that would make the connections with the motherboard. Most of the modern CPUs have a mechanism to dissipate heat, such as a small fan connected to the top of the CPU. A CPU mainly comprises of two parts. The Arithmetic Logic Unit (ALU), which is responsible for carrying out arithmetic and logical operations and a Control Unit, which is responsible for fetching instructions from the memory, decoding them to identify what kind of an operations they are and communicating with the other units that are required to execute the instruction (ALU for a arithmetic instruction, Memory for read/ write instructions, etc).

RAM is also known as the main memory of a computer. It is a volatile memory in which the data that is stored in the memory is lost when the power is turned off. RAMs are divided in to two categories as Static RAM (SRAM) and Dynamic RAM (DRAM). SRAM uses transistors to store a single bit of data and it does not need to be periodically refreshed. DRAM uses a separate capacitor to store each bit of data and it needs to be periodically refreshed to maintain the charge in the capacitors. In modern computers, RAM is organized in to modules that can be upgraded. This would allow increasing the RAM capacity or fixing damages very easily.

CPU is the main component of a computer system that is responsible for executing instructions, whereas the RAM is the main memory of a computer system. CPU frequently requires data and instructions that are stored in the RAM. To reduce the latency in accessing the RAM, cache memory was introduced. Frequently accessed data in the RAM are placed in the cache memory so that the CPU can quickly access them.

We will use NodeJS, a JavaScript based server-side environment to allow developers to build network applications.  Express is a web application server framework. 

Compiling
    is the general term for taking source code written in one language and transforming into another
Transpiling
    is a specific term for taking source code written in one language and transforming into another language that has a similar level of abstraction

So (simplistically) when you compile C#, your method bodies are transformed by the compiler into IL. This cannot be called transpiling because the two languages are very different levels of abstraction.

When you compile TypeScript, it is transformed by the compiler into JavaScript. These are very similar levels of abstraction, so you could call this transpiling.

##### APIs - Application program interfaces

EST is acronym for REpresentational State Transfer. It is architectural style for distributed hypermedia systems and was first presented by Roy Fielding in 2000 in his famous dissertation.

Like any other architectural style, REST also does have its own 6 guiding constraints which must be satisfied if an interface needs to be referred as RESTful. These principles are listed below.
Guiding Principles of REST

    Uniform interface. All API requests for the same resource should look the same, no matter where the request comes from. The REST API should ensure that the same piece of data, such as the name or email address of a user, belongs to only one uniform resource identifier (URI). Resources shouldn’t be too large but should contain every piece of information that the client might need.
    Client-server decoupling. In REST API design, client and server applications must be completely independent of each other. The only information the client application should know is the URI of the requested resource; it can't interact with the server application in any other ways. Similarly, a server application shouldn't modify the client application other than passing it to the requested data via HTTP.
    Statelessness. REST APIs are stateless, meaning that each request needs to include all the information necessary for processing it. In other words, REST APIs do not require any server-side sessions. Server applications aren’t allowed to store any data related to a client request.
    Cacheability. When possible, resources should be cacheable on the client or server side. Server responses also need to contain information about whether caching is allowed for the delivered resource. The goal is to improve performance on the client side, while increasing scalability on the server side.
    Layered system architecture. In REST APIs, the calls and responses go through different layers. As a rule of thumb, don’t assume that the client and server applications connect directly to each other. There may be a number of different intermediaries in the communication loop. REST APIs need to be designed so that neither the client nor the server can tell whether it communicates with the end application or an intermediary.
    Code on demand (optional). REST APIs usually send static resources, but in certain cases, responses can also contain executable code (such as Java applets). In these cases, the code should only run on-demand.

REST APIs communicate via HTTP requests to perform standard database functions like creating, reading, updating, and deleting records (also known as CRUD) within a resource. For example, a REST API would use a GET request to retrieve a record, a POST request to create one, a PUT request to update a record, and a DELETE request to delete one. All HTTP methods can be used in API calls. A well-designed REST API is similar to a website running in a web browser with built-in HTTP functionality.

The state of a resource at any particular instant, or timestamp, is known as the resource representation. This information can be delivered to a client in virtually any format including JavaScript Object Notation (JSON), HTML, XLT, Python, PHP, or plain text. JSON is popular because it’s readable by both humans and machines—and it is programming language-agnostic.

Request headers and parameters are also important in REST API calls because they include important identifier information such as metadata, authorizations, uniform resource identifiers (URIs), caching, cookies and more. Request headers and response headers, along with conventional HTTP status codes, are used within well-designed REST APIs.
    
In computing, an applet is any small application that performs one specific task that runs within the scope of a dedicated widget engine or a larger program, often as a plug-in.[1] The term is frequently used to refer to a Java applet, a program written in the Java programming language that is designed to be placed on a web page. Applets are typical examples of transient and auxiliary applications that don't monopolize the user's attention. Applets are not full-featured application programs, and are intended to be easily accessible. 

[ref](https://www.ibm.com/cloud/learn/rest-apis)

Endpoints ar at the end of the path

GET {{host}}/thing/specific-thing 

Or we can introduce a query parameter:

GET {{host}}/thing/?make=tesla&sort=-cost

POST - Add a new eg car
PATCH - update a new eg car
DELETE - delete the eg car

You can have more information in the body of the request. this may include tokens for security, or content type. 
Request body will contain a payload of data we will be sinding to the server, eg a new car.

You can make a PATCh request pointing to the car (endpoint) with a body (payload) of data that contains the attribute to be updated.

<img width="782" alt="Screenshot 2021-05-30 at 22 28 37" src="https://user-images.githubusercontent.com/57599753/120119157-6ba28400-c196-11eb-8534-936e4492b72a.png">

''should include messages''

Consumable APIs

Consumable APIs: APIs that are accessible to those outside of the organization, for example, a consumable API allows programmers to search Tweets or Yelp reviews.



**Pagination**      
Electronic pages displayed on a web browser are often called web pages, regardless of whether they are accessed online via a web server on the World Wide Web, or stored locally offline. More accurately, such documents are named by the markup language that makes them displayable via a web browser, e.g. "HTML page" or "PHP page".

With dynamic web pages, pagination is used for such things as displaying a limited number of results on search engine results pages, or showing a limited number of posts when viewing a forum thread.

Pagination is used in some form in almost every web application to divide returned data and display it on multiple pages within one web page. Pagination also includes the logic of preparing and displaying the links to the various pages.

Pagination can be handled client-side or server-side. 


#### Implementaion tools

Introduction to Node

Node (aka NodeJs) is a powerful framework to build network applications using JavaScript (in our case using TypeScript) outside of browsers. It has an asynchronous concurrent model which releases the developer from many concerns involving threading and dead-locking. Node is used as our server framework along with Express to handle web http requests and responses.
Introduction to TypeScript

Typescript is a flavor of JavaScript that forces hard typing on variables and methods. This prevents implementation errors like passing a string instead of a number. It compiles to pure JavaScript.

Files within exercise 02:

package.json: Strcuture for the system. It manages the Sw itself and the dependencies.
You run "npm i" in the terminal to install the dependencies. It will fetch the depedencies from the npm system and installing them in a local node modules folder.
After having the dependencies, one may start building. We have installed some tools to help us in the development stage and some dependencies for typeScript. The tsconfig and the tslint files help the the TypeScript system to know how to transpile TypeScript into JavaScript.


In the src directory:
server.ts is the main codebase. This is a server file.  

Introduction to Node

Node (aka NodeJs) is a powerful framework to build network applications using JavaScript (in our case using TypeScript) outside of browsers. It has an asynchronous concurrent model which releases the developer from many concerns involving threading and dead-locking. Node is used as our server framework along with Express to handle web http requests and responses.
Introduction to TypeScript

Typescript is a flavor of JavaScript that forces hard typing on variables and methods. This prevents implementation errors like passing a string instead of a number. It compiles to pure JavaScript.

Unit Tests

Ensure our atomic functions and methods perform their tasks correctly or fail appropriately. We'll be playing with Mocha and Chai as our unit testing framework. We'll be covering the basics so checkout the docs!
Integration Tests

Integration Tests ensure every endpoint in our software package perform their tasks correctly, fails appropriately, and communicates with other systems in a predictable manner (so they integrate properly). We'll be playing with Postman as our integration testing framework. We'll be covering the basics so checkout the docs!

Make sure the project has a master branch (production app), a stage branch (test branch running on the same infrastructure as the master branch), a development branch (where all changes are pushed), feature branches (where developers focus on specific functionalities). Also you should protect pull requests to the stage and master branches, just in case malicious develoeprs push code that, e.g., transfer money from users to their accounts.

Using Packages

Packages are libraries of code that are written by other developers and made available through open-source licenses for the development community to use freely.

Make sure packages are popular, have issues that have been closed, open license, read desfription to make sure it is what you need, make sure it passes the builds and coverage, 

### Storing data in the cloud

RAM (Random Access Memory): Data can be accessed quickly, but is erased once the server restarts. It may be okay to use RAM when prototyping, and later replace it with a database.

Hard Drive Disk: Data remains after server restarts, but is specific to that server (not shared across servers).

Race Condition: When an application’s behavior is dependent on other uncontrollable events. This is an issue with storing data on disks or RAM of multiple servers.

Relational Database: can store at scale, improve search runtime, and maintain relationships between data fields. We recommend using a database for storing data.

**Time to test vs. time to build**
In the future, it is beneficial to have, e.g., a proper relational database to reduce technical debt. However, it might not be interesting to build that on day one, as it might take too long to build in comparison to the tests you should run to decide and to check that features work.

When you want to scale the data stored in your system, you need to pay attention to the search, read, and write speed.

**Database basics**

<img width="750" alt="Screenshot 2021-06-03 at 23 40 47" src="https://user-images.githubusercontent.com/57599753/120715615-226b7080-c4c5-11eb-90b3-dc0af745638c.png">

One can add bloom filters to probabilisticly determine whether an item is in the branch of the B-tree.
B-Tree: a generalization of a binary search tree, which stores sorted data, but can have more than 2 child nodes.

Bloom Filters: a data structure that is useful for determining if an item is probably in a data set, or definitely not in the data set. Bloom filters don’t actually store the data themselves.

primary key and foreign key: The primary consists of one or more column in a table that are unique to each record (each row). A foreign key in a table contains the primary key of another table.

NoSQL dataases are very easy to scale out. They are key:value pair databases. Good when you do not know exactly what data model will contain.
Careful with technical debt.

**Structured Query Language for relational databases** (Postgress, MySQL, Oracle...)
Easy to scale up. One can store information in RAM, so one can quickly access those indeces when we are looking for records.
Slower to write information, as there are more indeces to update.

<img width="790" alt="Screenshot 2021-06-03 at 23 52 44" src="https://user-images.githubusercontent.com/57599753/120716803-cb669b00-c4c6-11eb-813f-0eb31fa3892a.png">

SQL is more like a standard, a framework. So the different databases that use it are not necesarily compatible as each SQL syntax has its own dialect.

Created successfully a relational database in AWS and connected to it with Postbird.

<img width="945" alt="Screenshot 2021-06-04 at 00 15 39" src="https://user-images.githubusercontent.com/57599753/120718704-01594e80-c4ca-11eb-90cb-364d263854c3.png">

**Filestore basics**


    File stores allow for archiving data. In AWS, the file store is called S3, and the archive resource is called “glacier”.
    Content Delivery Network (CDN): are a network of proxy servers that are placed closer to end users to deliver data and compute. CDNs reduce latency for end users.
    SignedURLs allow clients to send and receive data by directly communicating with the file store. This saves the server from using its bandwidth to serve as the intermediary that transmits data to and from the client. This is faster for clients as well.
    Buckets: a simple directory-like system in which to store data.


<img width="883" alt="Screenshot 2021-06-04 at 00 32 42" src="https://user-images.githubusercontent.com/57599753/120720448-6150f480-c4cc-11eb-8200-dccbb1aca9ed.png">

<img width="763" alt="Screenshot 2021-06-04 at 00 37 12" src="https://user-images.githubusercontent.com/57599753/120720802-04a20980-c4cd-11eb-8eb4-d7fa1ce221a3.png">

Notes

    Create “dev” resources: Use the “dev” set of infrastructure (set of servers, filestores, databases) for development, and a separate set of infrastructure for production.
    AES 256: Advanced Encryption Standard with a 256-bit key. This is a popular encryption standard.
    CORS: Cross Origin Resource Sharing: defines how a client can interact with a resource, and what the client can and cannot do with that resource. Setting the CORS policy of our S3 bucket allows our client to communicate with the S3 bucket using the SignedURL pattern.

Extensible Markup Language is a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable.


    HIPPA: HIPAA (Health Insurance Portability and Accountability Act) is a law in the U.S that requires data privacy and security for medical information.
    Use environment variables to store your username and password, to avoid hard-coding username and password information in your code.
    Avoid committing your passwords to git. Use .gitignore to define files that you do not want to commit to git.
    IAM user role: an IAM role can give a user a set of permissions to access one or more services.
    IAM service role: an IAM role gives a service a set of permissions to access one or more services.

<img width="763" alt="Screenshot 2021-06-04 at 00 54 23" src="https://user-images.githubusercontent.com/57599753/120722086-68c5cd00-c4cf-11eb-8486-1fbf3c726cca.png">


An environment variable is a dynamic-named value that can affect the way running processes will behave on a computer. They are part of the environment in which a process runs. For example, a running process can query the value of the TEMP environment variable to discover a suitable location to store temporary files, or the HOME or USERPROFILE variable to find the directory structure owned by the user running the process. 

It’s beneficial to create a role that contains a policy group (a set of permissions), rather than to assign individual permissions to a specific user. Imagine if a user leaves the company and a new hire takes their place. Instead of re-assigning all the permissions needed for their job, we can assign the existing IAM role to that new employee.

New Features in AWS - Batch Operations

Shortly after recording this segment, AWS released new ways of managing large-scale batch operations on Amazon S3 Objects. These are operations that can move, transform, or utilize the information within many file objects in your S3 bucket. You can read more about batch operations in the AWS S3 Developer Guide

When creating a service profile and selecting all S3 actions, there will be a new field in the resources section to limit which jobs can be invoked on the bucket (graphic below). Your options are to:

    select any so that this bucket has the right to call any job
    create a job and reference it by its ARN
    limiting the Policy actions (not selecting actions pertaining to jobs (i.e. CreateJob, DecribeJob, ListJobs).

AWS is a constantly evolving tool and you'll always be learning the latest features that make it such a powerful system.

Clarification on AWS Configuration Files

In this video, we installed our Amazon Web Services credentials using the aws configure terminal command. This creates two new files on your local computer to save credentials and configurations.

Each of these files can contain settings for multiple "profiles" which are defined by using hard brackets containing the profile name preceding the variables (i.e. [profile1]). For example, if you're working on two or three systems, you will need installed credentials for each. You can modify these files in your text editor of choice to add and edit profiles and select the appropriate profile at runtime of your application. Additional information on these files can be found in the AWS Docs.

Below are some sample file contents with multiple profiles:



~/.aws/credentials

[default]
aws_access_key_id=########################
aws_secret_access_key=########################

[profile1]
aws_access_key_id=########################
aws_secret_access_key=########################

[profile2]
aws_access_key_id=########################
aws_secret_access_key=########################

~/.aws/config

[default]
region=us-east-1

[profile1]
region=us-west-2

[profile2]
region=us-east-2

    Mac and Linux Users these files are located in a hidden .aws directory in your home directory: ~/.aws/

    Windows Users these files are located in C:\Users\ USERNAME .aws\config












