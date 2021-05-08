# Compute Service

Front-end vs. back-end
Application development is generally split into two realms: the frontend and the backend. The frontend is the part of the application that users see and interact with, such as the visual layout. The backend is the part that the user doesn’t see; this includes the server where the application's files live and the database where user data and business logic is persisted.

[Ref](https://www.cloudflare.com/learning/serverless/what-is-serverless/)

## EC2 - Servers in the Cloud

An EC2 instance is a Virtual Machine (VM) with user-defined configuration that runs on the cloud. There are a plethora of options to choose the instance-configuration of your choice.

Servers in the cloud have revolutionized the IT industry.

    Scale capacity up and down based on demands.
    Storage, more memory, and computing power can be added as needed.
    Obtain servers in minutes.
    No need for onsite hardware or capital expenses. No long term contracts.
    Feature reseilient applications.
    Pay as you use
    
Elastic Cloud Compute

Elastic Cloud Compute or EC2 is a foundational piece of AWS' cloud computing platform and is a service that provides servers for rent in the cloud.

- Servers for rent
- Manage and deploy applications
- Instances
- Physical servers in an data center (AZ, Availabitlity Zone = data center)

Pricing Options
There are several pricing options for EC2.

    On Demand - Pay as you go, no contract.
    Dedicated Hosts - You have your own dedicated hardware and don't share it with others.
    Spot - You place a bid on an instance price. If there is extra capacity that falls below your bid, an EC2 instance is provisioned. If the price goes above your bid while the instance is running, the instance is terminated.
    Reserved Instances - You earn huge discounts if you pay up front and sign a 1-year or 3-year contract.

Tips

    EC2 is found under the Compute section of the AWS Management Console.

    Spot instances can save you up to 90% off the on-demand pricing.

    There are several instance types that provide varying combinations of CPU, memory, storage, and networking capacity.
    
[Ref](https://www.amazonaws.cn/en/ec2/)
 
 
 Understanding the difference between GB and GiB
Overview

This article explains why an operating system can report a different disk drive capacity to that specified by the vendor of the drive. UKCloud charges per GiB, rather than per GB, to ensure that you only pay for what you actually use.

This article provides information about disk capacity and explains when viewed by an operating system, why the capacity of a drive differs from what is reported by a vendor.
Why is this important?

When purchasing disk drives, 1 GB is often defined as 1,000,000,000 bytes. However, when viewed by an operating system, the capacity displayed is often less than this. For example, a new 1 TB hard drive would be reported by the OS as 931 GB (this is 931 GiB). GiB (Gibibytes) is a standard unit used in the field of data processing and transmission and is defined as base 1024 rather than base 1000.

For example, 1 GB is defined as 1000³ bytes, whereas 1 GiB is defined as 1024³ bytes.
Unit of measure 	Bytes
Kilobyte (KB) 	1000¹ = 1,000
Megabyte (MB) 	1000² = 1,000,000
Gigabyte (GB) 	1000³ = 1,000,000,000
Terabyte (TB) 	1000⁴ = 1,000,000,000,000
Petabyte (PB) 	1000⁵ = 1,000,000,000,000,000
  	 
Kibibyte (KiB) 	1024¹ = 1,024
Mebibyte (MiB) 	1024² = 1,048,576
Gibibyte (GiB) 	1024³ = 1,073,741,824
Tebibyte (TiB) 	1024⁴ = 1,099,511,627,776
Pebibyte (PiB) 	1024⁵ = 1,125,899,906,842,624

[Ref](https://docs.ukcloud.com/articles/other/other-ref-gib.html)
 
Elastic IP addresses - An Elastic IP address is a static IPv4 address. Assume you have a server running on an EC2 instance, that has a specific IP address. In case, the instance fails, the back-up instance will spin up. The back-up instance will have a different IP address, which will require you to update the IP address used in your client application. This problem can be solved by using the elastic IP address. An Elastic IP address can mask the failure of an instance by remapping the current IP address to another instance in your account. 
An Elastic IP address is a static IPv4 address designed for dynamic cloud computing. An Elastic IP address is allocated to your AWS account, and is yours until you release it. By using an Elastic IP address, you can mask the failure of an instance or software by rapidly remapping the address to another instance in your account. Alternatively, you can specify the Elastic IP address in a DNS record for your domain, so that your domain points to your instance.
[Ref](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html)

Placement Group - When you launch a new EC2 instance, the EC2 service attempts to place the instance in such a way that all of your instances are spread out across underlying hardware to minimize correlated failures. You can use placement groups to influence the placement of a group of interdependent instances to meet the needs of your workload. Depending on the type of workload, you can create a placement group using one of the following placement strategies:

    Cluster – packs instances close together inside an Availability Zone. This strategy enables workloads to achieve the low-latency network performance necessary for tightly-coupled node-to-node communication that is typical of HPC applications.

    Partition – spreads your instances across logical partitions such that groups of instances in one partition do not share the underlying hardware with groups of instances in different partitions. This strategy is typically used by large distributed and replicated workloads, such as Hadoop, Cassandra, and Kafka.

    Spread – strictly places a small group of instances across distinct underlying hardware to reduce correlated failures.

The most productive high performance computing (HPC) systems feature a highly tuned combination of hardware and software. Hardware for HPC usually includes high-performance CPUs, fabric, memory and storage, and networking components, plus accelerators for specialized workloads. 

[Ref](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html)

Load Balancer - A load balancer distributes the incoming traffic across multiple targets, such as EC2 instances in one or more Availability Zones. AWS supports three types of load balancers: Application Load Balancers, Network Load Balancers (new), and Classic Load Balancers (might become deprecated soon). 
  
  
[Load Balancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html)
[Network Load Balancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html)
[Classic Load Balancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/introduction.html)

The Secure Shell Protocol (SSH) is a cryptographic network protocol for operating network services securely over an unsecured network. Typical applications include remote command-line, login, and remote command execution, but any network service can be secured with SSH.

SSH provides a secure channel over an unsecured network by using a client–server architecture, connecting an SSH client application with an SSH server.[2] The protocol specification distinguishes between two major versions, referred to as SSH-1 and SSH-2. The standard TCP port for SSH is 22. SSH is generally used to access Unix-like operating systems, but it can also be used on Microsoft Windows. Windows 10 uses OpenSSH as its default SSH client and SSH server.[3] 

In computer networking, a port is a communication endpoint. At the software level, within an operating system, a port is a logical construct that identifies a specific process or a type of network service. A port is identified for each transport protocol and address combination by a 16-bit unsigned number, known as the port number. The most common transport protocols that use port numbers are the Transmission Control Protocol (TCP) and the User Datagram Protocol (UDP).

SSH uses public-key cryptography to authenticate the remote computer and allow it to authenticate the user, if necessary.[2]

There are several ways to use SSH; one is to use automatically generated public-private key pairs to simply encrypt a network connection, and then use password authentication to log on. Another is to use a manually generated public-private key pair to perform the authentication, allowing users or programs to log in without having to specify a password. In this scenario, anyone can produce a matching pair of different keys (public and private). The public key is placed on all computers that must allow access to the owner of the matching private key (the owner keeps the private key secret). While authentication is based on the private key, the key itself is never transferred through the network during authentication. SSH only verifies whether the same person offering the public key also owns the matching private key. In all versions of SSH it is important to verify unknown public keys, i.e. associate the public keys with identities, before accepting them as valid. Accepting an attacker's public key without validation will authorize an unauthorized attacker as a valid user. 

A port number is always associated with an IP address of a host and the type of transport protocol used for communication. It completes the destination or origination network address of a message. Specific port numbers are reserved to identify specific services so that an arriving packet can be easily forwarded to a running application. For this purpose, port numbers lower than 1024 identify the historically most commonly used services and are called the well-known port numbers. Higher-numbered ports are available for general use by applications and are known as ephemeral ports.

Ports provide a multiplexing service for multiple services or multiple communication sessions at one network address. In the client–server model of application architecture, multiple simultaneous communication sessions may be initiated for the same service. 

[Ref](https://en.wikipedia.org/wiki/Port_(computer_networking))

The Transmission Control Protocol (TCP) is one of the main protocols of the Internet protocol suite. It originated in the initial network implementation in which it complemented the Internet Protocol (IP). Therefore, the entire suite is commonly referred to as TCP/IP. TCP provides reliable, ordered, and error-checked delivery of a stream of octets (bytes) between applications running on hosts communicating via an IP network. Major internet applications such as the World Wide Web, email, remote administration, and file transfer rely on TCP, which is part of the Transport Layer of the TCP/IP suite. SSL/TLS often runs on top of TCP.

TCP is connection-oriented, and a connection between client and server is established before data can be sent. The server must be listening (passive open) for connection requests from clients before a connection is established. Three-way handshake (active open), retransmission, and error-detection adds to reliability but lengthens latency. Applications that do not require reliable data stream service may use the User Datagram Protocol (UDP), which provides a connectionless datagram service that prioritizes time over reliability. TCP employs network congestion avoidance. However, there are vulnerabilities to TCP including denial of service, connection hijacking, TCP veto, and reset attack. 

[Ref](https://en.wikipedia.org/wiki/Transmission_Control_Protocol)

## Elastic Block Store (EBS)

Elastic Block Store

Elastic Block Store (EBS) is a storage solution for EC2 instances and is a physical hard drive that is attached to the EC2 instance to increase storage.

Benefits: You could use the in memory (instance store), but, with EBS you can persist data after the EC2 is terminated or shutdown. It is also replicated in its AZ. 

An Amazon EBS volume is a durable, block-level storage device that you can attach to your instances. After you attach a volume to an instance, you can use it as you would use a physical hard drive.

Tips

    EBS is found on the EC2 Dashboard.
    There are several EBS volume types that fall under the categories of Solid State Drives (SSD) and Hard Disk Drives (HDD).

There are a variety of operation you can make use of after creating a volume, such as:

    Attach a volume to one or more EC2 instance(s)
    Detach a volume from an instance
    Replace a volume
    View the volume details, and monitor the current status
    Delete a volume

## Virtual private cloud - VPC

Flat network: efficient, simple and cheap, all devices are conected to a single switch. They are all part of the same broadcast network and communicate with each other.

VPC: allows you to crete your own private network where you launch your services, the EC2s would inherit the security of the network. This is done for security. We control the network config and security, and we use public subnets to communicate with the Internet, the rest of subnets are private. It lives within a region and  spreads accross multiple AZs.

Virtual Private Cloud or VPC allows you to create your own private network in the cloud. You can launch services, like EC2, inside of that private network. A VPC spans all the Availability Zones in the region.

VPC allows you to control your virtual networking environment, which includes:

    IP address ranges
    subnets
    route tables
    network gateways

Tips

    VPC is found under Networking & Content Delivery section of the AWS Management Console.
    The default limit is 5 VPCs per Region. You can request an increase for these limits.
    Your AWS resources are automatically provisioned in a default VPC.
    There are no additional charges for creating and using the VPC.
    You can store data in Amazon S3 and restrict access so that it’s only accessible from instances in your VPC.

A virtual private cloud (VPC) is an on-demand configurable pool of shared resources allocated within a public cloud environment, providing a certain level of isolation between the different organizations (denoted as users hereafter) using the resources. The isolation between one VPC user and all other users of the same cloud (other VPC users as well as other public cloud users) is achieved normally through allocation of a private IP subnet and a virtual communication construct (such as a VLAN or a set of encrypted communication channels) per user. In a VPC, the previously described mechanism, providing isolation within the cloud, is accompanied with a VPN function (again, allocated per VPC user) that secures, by means of authentication and encryption, the remote access of the organization to its VPC resources. With the introduction of the described isolation levels, an organization using this service is in effect working on a 'virtually private' cloud (that is, as if the cloud infrastructure is not shared with other users), and hence the name VPC. 

[VPC](https://en.wikipedia.org/wiki/Virtual_private_cloud)
[Amazon VPC](https://aws.amazon.com/vpc/?vpc-blogs.sort-by=item.additionalFields.createdDate&vpc-blogs.sort-order=desc)
[Amazon VPC ii](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html)









