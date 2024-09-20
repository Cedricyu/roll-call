# Step 1: Use official node image as the base image
FROM node:18-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json into the working directory
COPY package*.json ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the rest of the application code into the working directory
COPY . .

# Step 6: Expose the port Vite will run on (default is 5173)
EXPOSE 5173

# Step 7: Start the Vite development server
CMD ["npm", "run", "dev"]
