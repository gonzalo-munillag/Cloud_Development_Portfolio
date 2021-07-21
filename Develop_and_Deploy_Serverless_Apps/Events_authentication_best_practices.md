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
![Screenshot 2021-07-21 at 13 48 58](https://user-images.githubusercontent.com/57599753/126483978-3e8ba1b8-ee9d-43d1-9f89-6d9975d1d9f8.png)


# Authentication

# Best practices
