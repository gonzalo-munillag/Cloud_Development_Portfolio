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

Basic hand shckaes betwen client and server. So we have an standardized interface. This way, we make sure they can send data back and forth.

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

Othe more inricate examples:  
https://sub.domain.com:port/where/file.html?query=param#frag

port: what network port to route the traffic through. Eg. 80: general web traffic, 8080 is an alternative, and 5432 used when working with databases.

The file extention, file.html: what type of file we have. 

?query=param: query variables we pass to the server

#frag: fragments. Useful for dealing with front-end location of where the information resides. 

Additonal data may be sent with a request:  
Headers. Allos to inlcude content type, type of file and what kind of file we are sending. Authorization headers, allos to send tokens or passwords securely to make sure we can execute a set of actions in the server.   
Reuqest body payload. Tell us what data we are sending to a server.
Request types: What kind of command are we issuing.   
  GET
  POST
  PATCH
  DELETE
              
###### The serves sends a RESPONSE to the server. 
            
Standardized HTTP Status Codes

No one expects you to remember every status code by heart. What's important is that you give some thought to the codes you're using in your systems. Here’s a good reference list of all HTTP status codes.

              
  





















