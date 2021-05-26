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

1. The client makes a REQUEST to the server. 
Example
https://www.udacity.com/school-of-cloud-computing

https - this is the protocol (Hypertext Transfer Protocol). It announces the "language" the client and server should be speaking. HTTPS is a secure way of end-to-end communication using (before) SSL or TLS.
HTTP means we send hypetext type of information. 

Hypertext is text displayed on a computer display or other electronic devices with references (hyperlinks) to other text that the reader can immediately access.[1] Hypertext documents are interconnected by hyperlinks, which are typically activated by a mouse click, keypress set, or screen touch. Apart from text, the term "hypertext" is also sometimes used to describe tables, images, and other presentational content formats with integrated hyperlinks. Hypertext is one of the key underlying concepts of the World Wide Web,[2] where Web pages are often written in the Hypertext Markup Language (HTML). As implemented on the Web, hypertext enables the easy-to-use publication of information over the Internet.






















