
#Base image
FROM node:latest
#Creates directory for container
RUN mkdir -p /usr/src/app
#Sets newly-created directory as working directory for any further instructions w/in the Dockerfile
WORKDIR /usr/src/app
#Copies package.json and package-lock.json over to new directory --> '*' used as a 'wildcard' to select any file containing 'package'
COPY package*.json /usr/src/app/
#Runs any script provided; in this case, npm install
RUN npm install -q
#Copies the entire local directory into the working directory
COPY . .
#Exposes container's port 3004
EXPOSE 3004
#Runs script npm start
CMD ["npm", "start"]