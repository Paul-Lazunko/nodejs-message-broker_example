import { MessageBrokerServer } from 'nodejs-message-broker';

const server = new MessageBrokerServer({
  id: 'message_broker_1',
  port: 8887,
  syncInterval: 5000,
  secureKey: 'testtesttesttesttesttesttesttest',
  proxyTo: [{
    host: 'message_broker_2',
    port: 8886,
    reconnect: true,
    reconnectInterval: 1000,
    secureKey: 'testtesttesttesttesttesttesttest',
    id: 'message_broker_1',
    requestHandler: async (data,options) => {
    }
  }]
});

