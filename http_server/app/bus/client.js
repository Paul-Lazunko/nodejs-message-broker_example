import { MessageBrokerClient } from 'nodejs-message-broker'

export const bus = new MessageBrokerClient({
  host: 'proxy',
  port: 8888,
  reconnect: true,
  reconnectInterval: 1000,
  taskInterval: 100,
  action: 'http_server',
  secureKey: 'test',
  requestHandler: async (data, options) => {

  }
});
