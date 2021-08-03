# sets base image to build off of
FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

# install all the npm packages needed
RUN npm install

# move source into dockerfile
COPY . .

# setup env var for the app to send data to, allows it to be configurable
ENV BACKEND_API=http://backend_api:6969/doSomething/

# expose port the app will listen on
EXPOSE 3000

# sets start command
CMD [ "node", "app.js" ]