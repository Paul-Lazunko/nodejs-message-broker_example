import { MessageBrokerClient } from 'nodejs-message-broker'

export const bus = new MessageBrokerClient({
  host: 'proxy',
  port: 8888,
  reconnect: true,
  reconnectInterval: 1000,
  taskInterval: 100,
  id: 'http_server',
  secureKey: 'testtesttesttesttesttesttesttest',
  requestHandler: async (data, options) => {

  }
});
