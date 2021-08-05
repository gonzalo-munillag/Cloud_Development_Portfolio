# Capstone Project: 

Acknowledgments:

I would like to thank [Parithosh Jayanthi](https://github.com/parithosh) for his kind support during the development of this project.

Without docker:

	cd <folder _path>
	npm install 
	node app.js

1. 
Then use your browser to visit localhost:3000
 
2. 
It will ask you for a login, you should enter **exactly**: 
for email "user@email.com" and for password "password"

3. 
You can safelist more users in line 11 of app.js

4. 
Then the website will take you to a page to enter a date and a todo

5. 
Once you hit submit, the app will print out the list of dates and todos

6. 
To input more data, press the "back" button of your browser

To run it locally with **docker**:

First you need to start the docker daemon.

run in the terminal in the directory where docker-compose.yaml is:

	docker image prune --all

	docker-compose -f docker-compose-build.yaml build --parallel

	docker-compose up

Visit localhost:3000

Ro deploy in **AWS' Kubernetes cluster**:

Useful links:

For Kubernetes to know the docker secret https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/#registry-secret-existing-credentials

To access the app in Kubernetes externally, type NodePort: https://kubernetes.io/docs/concepts/services-networking/service/#nodeport


Future work:

You can make modifications in app.js   
You can add a new page to render the data if you like
