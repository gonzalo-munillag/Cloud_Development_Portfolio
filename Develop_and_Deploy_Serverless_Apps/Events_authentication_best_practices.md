<img width="767" alt="Screenshot 2021-07-24 at 10 54 43" src="https://user-images.githubusercontent.com/57599753/126863242-8a5d17e1-3eed-483f-b75e-97ffd2751de8.png">
# Event processing

<img width="1066" alt="Screenshot 2021-07-21 at 13 01 07" src="https://user-images.githubusercontent.com/57599753/126478516-66d9c0d6-d02f-47ec-9de9-d11f00b7179a.png">

Classical approach:

<img width="1066" alt="Screenshot 2021-07-21 at 13 04 35" src="https://user-images.githubusercontent.com/57599753/126478928-70b99596-41be-400d-866b-7a015e0ed345.png">

Serverless approach

<img width="1066" alt="Screenshot 2021-07-21 at 13 04 47" src="https://user-images.githubusercontent.com/57599753/126478946-9291cfaa-6eb3-40ee-ac96-482682f24ef9.png">

The problem is taht as of today, we have a limit of 6MB on events handeled by lambda functions.

Solution: Preseigned URL

<img width="1066" alt="Screenshot 2021-07-21 at 13 06 31" src="https://user-images.githubusercontent.com/57599753/126479126-62fc177b-f007-496a-8482-a6ef5ba16c29.png">

<img width="1066" alt="Screenshot 2021-07-21 at 13 07 30" src="https://user-images.githubusercontent.com/57599753/126479240-39287f52-fa00-4491-8b7f-17cd61e82c7e.png">

Note that “SignedURL” and “Presigned URL” refer to the same concept. In Course 2, the instructor (Gabe) refers to “SignedURL”. Here, Ivan refers to this as “Presigned URL”.

Presigned URL is a special URL pointing to an S3 bucket that can be used by anyone to upload/read an object. It can be used to access an S3 bucket even if it is private.


<img width="1066" alt="Screenshot 2021-07-21 at 13 30 51" src="https://user-images.githubusercontent.com/57599753/126481905-19035d7a-7367-4e4a-9cee-fc647f89a6be.png">

WebSocket allows to implement bi-directional communication between a web application and a server. It can be especially useful for applications like:

    Messaging Applications
    Real-time Notifications
    Real-time Dashboards

Elasticsearch

<img width="1066" alt="Screenshot 2021-07-21 at 13 36 49" src="https://user-images.githubusercontent.com/57599753/126482563-ea268253-5ff9-47be-8744-265a52dceebc.png">

Data streams

 <img width="1066" alt="Screenshot 2021-07-21 at 13 42 44" src="https://user-images.githubusercontent.com/57599753/126483263-b92b77b4-c4fb-46bf-99c9-1bbe41ee66d9.png">

Services: kinesis, kafka, dynamoDB.

![Screenshot 2021-07-21 at 13 44 44](https://user-images.githubusercontent.com/57599753/126483496-33fc946a-7bb6-45b7-9082-70d6312a737b.png)

What operations can we perform on a data stream

    Add an element to the end of a stream

Read an element from an arbitrary position

<img width="1066" alt="Screenshot 2021-07-21 at 13 50 25" src="https://user-images.githubusercontent.com/57599753/126484127-a6baf870-cbc2-49f0-b169-04a663f5730d.png">
<img width="1066" alt="Screenshot 2021-07-21 at 13 50 34" src="https://user-images.githubusercontent.com/57599753/126484138-c4ca58c2-f331-431b-acaf-90341b450be8.png">
<img width="1066" alt="Screenshot 2021-07-21 at 14 12 33" src="https://user-images.githubusercontent.com/57599753/126486510-70863307-c02f-436f-ab1c-1aac3a396455.png">


SNS is a service to send messages to other services.

It has two main concepts:

    Publishers - publish messages
    Subscribers - consume incoming messages

Publishers and subscribers communicate via topics:

    A publisher publish a message to a topic
    A subscriber receives a message if it is subscribed to a topic
    One topic can have many subscribers
    Subscribers can use various protocols: Lambda, HTTP, email, SMS, etc.

<img width="1066" alt="Screenshot 2021-07-21 at 14 15 34" src="https://user-images.githubusercontent.com/57599753/126486868-62a66961-b217-429b-b07b-87c053098e30.png">

What is the reason why we are using Simple Notification Service in our application?

S3 does not allow to send events to multiple targets

# Authentication

This is not efficient:

<img width="1087" alt="Screenshot 2021-07-24 at 10 44 23" src="https://user-images.githubusercontent.com/57599753/126862985-78c9495f-4d47-47f8-8621-70ec386cdc1c.png">

<img width="1087" alt="Screenshot 2021-07-24 at 10 46 58" src="https://user-images.githubusercontent.com/57599753/126863038-4dc169b0-3d68-48e0-a283-e3139ba738fe.png">

This is better:

<img width="1087" alt="Screenshot 2021-07-24 at 10 46 35" src="https://user-images.githubusercontent.com/57599753/126863031-6db52cb8-6a16-4056-ba65-6ffab9060eb7.png">
<img width="1087" alt="Screenshot 2021-07-24 at 10 49 08" src="https://user-images.githubusercontent.com/57599753/126863084-8f43b6a7-1f56-49a7-b83c-907329ed7f53.png">

The best soution for the showed case example:

<img width="1087" alt="Screenshot 2021-07-24 at 10 50 53" src="https://user-images.githubusercontent.com/57599753/126863140-0dece01c-0b41-4fb2-8e9a-8168526d8d57.png">

A server-side cookie is a type of cookie that is set by an HTTP server, but its value will not be available to JavaScript code running in a browser. A value of a server-side cookie is only available to a browser, and it will automatically send with requests as a normal cookie. Since a cookie is not available to JavaScript code running in a browser it cannot be accessed by any malicious code. If a JWT token is stored in a server-side cookie it can be used for authentication in a more secure fashion.

Notice that in this course and in many other examples online JWT tokens are stored in a local storage. While this is a simpler option that is sufficient for demos it is not secure and is discouraged.

<img width="1147" alt="Screenshot 2021-07-24 at 11 13 56" src="https://user-images.githubusercontent.com/57599753/126863853-e963a67d-079c-41c4-829d-258c1020a449.png">
<img width="1147" alt="Screenshot 2021-07-24 at 11 14 33" src="https://user-images.githubusercontent.com/57599753/126863881-4a83a615-ad64-48fb-b7c9-499f083ed071.png">

What are some good options to store secrets used by AWS Lambda functions?

    SSM Parameter Store

    AWS Secrets Manager

<img width="1147" alt="Screenshot 2021-07-24 at 11 17 04" src="https://user-images.githubusercontent.com/57599753/126863981-8632f476-f726-45a2-9d57-ba016652ca3b.png">

# Best practices

<img width="1147" alt="Screenshot 2021-07-24 at 11 22 47" src="https://user-images.githubusercontent.com/57599753/126864136-598b24ff-15c6-4d0f-bbd3-5689c0158ae0.png">

Adapters architecture:

<img width="1147" alt="Screenshot 2021-07-24 at 11 24 38" src="https://user-images.githubusercontent.com/57599753/126864179-c1b24978-e417-4a9f-a7ea-a5b3185b7a24.png">

<img width="1147" alt="Screenshot 2021-07-24 at 11 36 16" src="https://user-images.githubusercontent.com/57599753/126864465-6f2e7383-16c6-4070-b141-ebedc31517f8.png">

What descriptions most accurately characterizes a process of canary deployment?

Migrate traffic to the new version gradually and rollback if any problems occur


<img width="1147" alt="Screenshot 2021-07-24 at 11 37 58" src="https://user-images.githubusercontent.com/57599753/126864504-10aee916-a144-43fe-b6ca-8cc680d44c5c.png">
<img width="1147" alt="Screenshot 2021-07-24 at 11 39 32" src="https://user-images.githubusercontent.com/57599753/126864538-6527f6e5-b114-42ab-a85a-94c9ede78f5a.png">
<img width="1147" alt="Screenshot 2021-07-24 at 11 40 37" src="https://user-images.githubusercontent.com/57599753/126864566-382af401-dda3-43f1-b13e-a413311d2ae9.png">
<img width="1147" alt="Screenshot 2021-07-24 at 11 41 33" src="https://user-images.githubusercontent.com/57599753/126864590-f1d57238-4298-46de-8ad4-788d013ea0c9.png">

Cold start
<img width="1147" alt="Screenshot 2021-07-24 at 11 50 22" src="https://user-images.githubusercontent.com/57599753/126864808-3d04cf6c-f0ef-4615-8da7-3b109e576773.png">

<img width="1147" alt="Screenshot 2021-07-24 at 11 51 35" src="https://user-images.githubusercontent.com/57599753/126864833-82af4a42-4fb3-4b05-b76a-70bb0bcaa828.png">
<img width="1147" alt="Screenshot 2021-07-24 at 11 52 36" src="https://user-images.githubusercontent.com/57599753/126864854-6b2ed8cb-ddc2-466d-bbd1-02eb0bc3b601.png">

Security

<img width="1147" alt="Screenshot 2021-07-24 at 11 53 40" src="https://user-images.githubusercontent.com/57599753/126864885-b413778b-0483-4180-b64c-76895f7b6600.png">
<img width="1147" alt="Screenshot 2021-07-24 at 11 54 10" src="https://user-images.githubusercontent.com/57599753/126864900-24f6f3f3-164b-42f0-8e6e-58027c1679b9.png">


