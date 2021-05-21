# Storage and Content Delivery

## S3

Vertical scaling: Chages the characteristics of your servers to manage more demand, e.g., more memory
Horizontal scaling: Adds more instances to cope with increasing demand, e.g. more EC2s
Diagonal: A combination of the two

Storage in the Cloud

Storage and database services in the cloud provide a place for companies to collect, store, and analyze the data they've collected over the years at a massive scale.

Storage & Database Services

    Amazon Simple Storage Service (Amazon S3)
    Amazon Simple Storage Service (Amazon S3) Glacier
    DynamoDB
    Relational Database Service (RDS)
    Redshift
    ElastiCache
    Neptune
    Amazon DocumentDB

S3 & S3 Glacier
Amazon Simple Storage Service (or S3) is an object storage system in the cloud.

Storage Classes
S3 offers several storage classes, which are different data access levels for your data at certain price points.

    S3 Standard
    S3 Glacier
    S3 Glacier Deep Archive
    S3 Intelligent-Tiering
    S3 Standard Infrequent Access
    S3 One Zone-Infrequent Access
    
[ref](https://aws.amazon.com/s3/storage-classes/)

Tips

    S3 is found under the Storage section on the AWS Management Console.
    A single object can be up to 5 terabytes in size.
    You can enable Multi-Factor Authentication (MFA) Delete on an S3 bucket to prevent accidental deletions.
    S3 Acceleration can be used to enable fast, easy, and secure transfers of files over long distances between your data source and your S3 bucket. 

There are several properties that you can set for S3 buckets, such as:

    Bucket Versioning - Allows you to keep multiple versions of an object in the same bucket.
    Static website hosting - Mark if the bucket is used to host a website. S3 is a very cost-effective and cheap solution for serving up static web content.
    Requester pays - Make the requester pays for requests and data transfer costs.
    Server access logging - Log requests for access to your bucket.
    
## DynamoDB

DynamoDB is a NoSQL document database service that is fully managed. Unlike traditional databases, NoSQL databases, are schema-less. Schema-less simply means that the database doesn't contain a fixed (or rigid) data structure.

Tips

    DynamoDB is found under the Database section on the AWS Management Console.
    DynamoDB can handle more than 10 trillion requests per day.
    DynamoDB is serverless as there are no servers to provision, patch, or manage.
    DynamoDB supports key-value and document data models.
    DynamoDB synchronously replicates data across three AZs in an AWS Region.
    DynamoDB supports GET/PUT operations using a primary key.

AWS is responsible for patching or upgrading the database. They are also responsible for provisioning or managing servers.
[ref](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html)

When thinking about data encryption, you should mainly consider three scenarios:

    Encrypting your data at rest, which means encrypting it while it is stored on whatever file storage you use.
    Encrypting your data in transit, which means encrypting data while it travels through private or public network communication channels.
    Encrypting your data in use, which means encrypting it while it is actively used in RAM or CPU caches and registers.

## Relational Database Service (RDS)

RDS (or Relational Database Service) is a service that aids in the administration and management of databases. RDS assists with database administrative tasks that include upgrades, patching, installs, backups, monitoring, performance checks, security, etc.
RDS is able to manage popular database engines like Aurora, Oracle, PostgreSQL, MySQL, MariaDB, and SQL Server.

A relational database is a collection of data items with pre-defined relationships between them. These items are organized as a set of tables with columns and rows. Tables are used to hold information about the objects to be represented in the database. Each column in a table holds a certain kind of data and a field stores the actual value of an attribute. The rows in the table represent a collection of related values of one object or entity. Each row in a table could be marked with a unique identifier called a primary key, and rows among multiple tables can be made related using foreign keys. This data can be accessed in many different ways without reorganizing the database tables themselves.


Amazon Relational Database Service (Amazon RDS) makes it easy to set up, operate, and scale a relational database in the cloud. It provides cost-efficient and resizable capacity while automating time-consuming administration tasks such as hardware provisioning, database setup, patching and backups. It frees you to focus on your applications so you can give them the fast performance, high availability, security and compatibility they need.

Amazon RDS is available on several database instance types - optimized for memory, performance or I/O - and provides you with six familiar database engines to choose from, including Amazon Aurora, PostgreSQL, MySQL, MariaDB, Oracle Database, and SQL Server. You can use the AWS Database Migration Service to easily migrate or replicate your existing databases to Amazon RDS.

Database Engine Support

    Oracle
    PostgreSQL
    MySQL
    MariaDB
    SQL Server

Features

    failover
    backups
    restore
    encryption
    security
    monitoring
    data replication
    scalability

## Redshift

Redshift is a cloud data warehousing service to help companies manage big data. Redshift allows you to run fast queries against your data using SQL, ETL, and BI tools. Redshift stores data in a column format to aid in fast querying.

Tips

    Redshift can be found under the Database section on the AWS Management Console.
    Redshift delivers great performance by using machine learning.
    Redshift Spectrum is a feature that enables you to run queries against data in Amazon S3.
    Redshift encrypts and keeps your data secure in transit and at rest.
    Redshift clusters can be isolated using Amazon Virtual Private Cloud (VPC).

No other data warehouse makes it as easy to gain new insights from all your data. With Redshift, you can query and combine exabytes of structured and semi-structured data across your data warehouse, operational database, and data lake using standard SQL. Redshift lets you easily save the results of your queries back to your S3 data lake using open formats, like Apache Parquet, so that you can do additional analytics from other analytics services like Amazon EMR, Amazon Athena, and Amazon SageMaker.

Amazon Redshift is a fully managed, petabyte-scale data warehouse service in the cloud. You can start with just a few hundred gigabytes of data and scale to a petabyte or more. This enables you to use your data to acquire new insights for your business and customers.

The first step to create a data warehouse is to launch a set of nodes, called an Amazon Redshift cluster. After you provision your cluster, you can upload your data set and then perform data analysis queries. Regardless of the size of the data set, Amazon Redshift offers fast query performance using the same SQL-based tools and business intelligence applications that you use today. 

## Content Delivery in the Cloud

A Content Delivery Network (or CDN) speeds up delivery of your static and dynamic web content by caching content in an Edge Location close to your user base.

Benefits
The benefits of a CDN includes:

    low latency
    decreased server load
    better user experience

Cloud Front

CloudFront is used as a global content delivery network (CDN). Cloud Front speeds up the delivery of your content through Amazon's worldwide network of mini-data centers called Edge Locations.

CloudFront works with other AWS services, as shown below, as an origin source for your application:

    Amazon S3
    Elastic Load Balancing
    Amazon EC2
    Lambda@Edge
    AWS Shield

Tips

    CloudFront is found under the Networking & Content Delivery section on the AWS Management Console.
    Amazon countinously adds new Edge Locations.
    CloudFront ensures that end-user requests are served from the closest edge location.
    CloudFront works with non-AWS origin sources.
    You can use GeoIP blocking to serve content (or not serve content) to specific countries.
    Cache control headers determine how frequently CloudFront needs to check the origin for an updated version your file.
    The maximum size of a single file that can be delivered through Amazon CloudFront is 20 GB.

[Granting the OAI Permission to Read Files in Your Amazon S3 Bucket ](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html#private-content-granting-permissions-to-oai)


# Security

Security in the Cloud

As adoption of cloud services has increased, so has the need for increased security in the cloud. The great thing about cloud security is that it not only protects data, it also protects applications that access the data. Cloud security even protects the infrastructure (like servers) that applications run on.

The way security is delivered depends on the cloud provider you're using and the cloud security options they offer.

### AWS WAF

AWS WAF (or AWS Web Application Firewall) provides a firewall that protects your web applications. WAF can stop common web attacks by reviewing the data being sent to your application and stopping well-known attacks.

Tips

    WAF is found under the Security, Identity, & Compliance section on the AWS Management Console.
    WAF can protect web sites not hosted in AWS through Cloud Front.
    You can configure CloudFront to present a custom error page when requests are blocked.

AWS WAF is available under a composite dashboard, WAF & Shield, that combines the following three services:

    AWS WAF: It allows you to protect your web applications from common web exploits by monitoring and controlling the web requests coming to an Amazon API Gateway API, an Amazon CloudFront distribution, or an Application Load Balancer.

    AWS Shield: It provides continuous DDoS attack detection and automatic mitigations. AWS Shield offers two tiers of protection - Standard and Advanced.

    AWS Firewall Manager: It allows you to configure and manage firewall rules across accounts and applications centrally.

Within AWS WAF service, you can create Web access control lists (web ACLs) to monitor HTTP(S) requests for AWS resources. You can protect the following types of resources:

    CloudFront distributions
    Regional resources (Application Load Balancer, API Gateway, AWS AppSync)

Cross-site scripting is a type of security vulnerability typically found in web applications. XSS attacks enable attackers to inject client-side scripts into web pages viewed by other users. A cross-site scripting vulnerability may be used by attackers to bypass access controls such as the same-origin policy.

AWS Shield

AWS Shield is a managed DDoS (or Distributed Denial of Service) protection service that safeguards web applications running on AWS. AWS Shield offers two tiers of protection - Standard and Advanced.

    Standard tier: Standard AWS Shield is a service that you get "out of the box", it is always running (automatically) and is a part of the free standard tier.

    Advanced tier: If you want to use some of the more advanced features, you'll have to utilize the paid tier.

Identity & Access Management

Identity & Access Management (IAM) is an AWS service that allows us to configure who can access our AWS account, services, or even applications running in our account. IAM is a global service and is automatically available across ALL regions.

AWS IAM service securely controls access to AWS resources by authenticating and authorizing (giving granular permissions) the individual users, applications, or services. 

1. IAM User

A user is a unique identifier generated by the IAM service and recognized by all AWS services to grant access to AWS resources. A user can be a person, system, or application that requires access to AWS services. You can generate login credentials and access keys for any user in your account. Roles and policies control the scope (permissions) of a user's access to AWS resources in your account.
2. IAM Group

A group collects IAM users with the same level of permissions to access AWS resources. You can attach or detach permissions to a group using access control policies. A group makes it easier to manage IAM users with the same level of permissions.
3. IAM Role

A role is simply a set of policies (permissions) to access AWS services. You can assign a role either to an IAM user or an AWS service such as EC2. Creating and storing roles helps to delegate access with defined permissions without sharing long-term access keys.
Difference between an IAM role and an IAM user

An IAM user has permanent credentials that can be used to interact with AWS services directly. In contrast, an IAM role does not have any credentials; hence it cannot make direct requests to AWS services. IAM roles are assumed by authorized entities, such as IAM users, applications, or other AWS services.
4. IAM Policy

An access control policy is a JSON file that defines the resource to grant access, level of access, and allowed actions. You can attach a policy to multiple users, groups, or roles to assign permissions to AWS resources.

[Policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_examples.html)
A policy is an object in AWS that, when associated with an identity or resource, defines their permissions. AWS evaluates these policies when an IAM principal (user or role) makes a request. Permissions in the policies determine whether the request is allowed or denied. Most policies are stored in AWS as JSON documents that are attached to an IAM identity (user, group of users, or role). Identity-based policies include AWS managed policies, customer managed policies, and inline policies.

[Policy generator](https://awspolicygen.s3.amazonaws.com/policygen.html)
[FAQs IAM](https://aws.amazon.com/iam/faqs/?nc=sn&loc=5)





