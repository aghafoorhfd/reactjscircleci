# Use an official Node.js runtime as a parent image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Install serve globally to serve the static site
RUN npm install -g serve
EXPOSE 3000
# Set the command to run the app using serve
CMD ["serve", "-s", "build", "-l", "3000"]

# Expose port 3000 to the outside world
