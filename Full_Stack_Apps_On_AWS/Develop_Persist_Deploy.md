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
You run "nom i" in the terminal to install the dependencies. It will fetch the depedencies from the npm system and installing them in a local node modules folder.
After having the dependencies, one may start building. We have installed some tools to help us in the development stage and some dependencies for typeScript. The tsconfig and the tslint files help the the TypeScript system to know how to transpile TypeScript into JavaScript.


In the src directory:
server.ts is the main codebase. This is a server file.  
















