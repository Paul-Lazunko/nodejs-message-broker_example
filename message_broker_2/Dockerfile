FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./message_broker_2/package.json ./

RUN npm install

# Bundle app source
COPY ./message_broker_2 .

EXPOSE 8886

CMD [ "node", "-r", "esm", "index.js" ]
