# Use the Node base image as the build stage
FROM node:alpine AS build

# Install cURL
RUN apk add curl

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package.json .

# Copy the rest of the application code to the container
COPY . .

# Copy the .env.local to .env
RUN mv .env.local .env

# Install dependencies
RUN npm install

# Install Nodemonz
RUN npm i -g nodemon

# Expose the container port
EXPOSE 8000

# Start the Express.js application
CMD ["npm", "start"]