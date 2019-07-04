Simple example of the system based on **nodejs-message-broker** package and Docker which is composed from:
- 2 message broker servers;
- load balance proxy;
- 2 microservices;
- http-server which sends requests to microservices;

```bash
git clone ...
cd ./
docker-compose up -d;
```

Send POST HTTP request to http-server:
http://localhost:8000/test


