FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./proxy/package*.json ./

RUN npm install

# Bundle app source
COPY ./proxy .

EXPOSE 8888

CMD [ "node", "-r", "esm", "index.js" ]
