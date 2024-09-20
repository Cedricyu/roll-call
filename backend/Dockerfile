# Use Node.js image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port (assuming your backend runs on port 5000)
EXPOSE 5000

# Start the backend server
CMD ["npm", "start"]
