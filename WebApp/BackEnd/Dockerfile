# Base Image: Node.js 10.X
FROM node:10.15.1

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@6+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

# Expose Port
EXPOSE 4004

# Startup
CMD [ "node", "index.js" ]



