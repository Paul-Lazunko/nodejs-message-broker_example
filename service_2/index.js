import { MessageBrokerClient } from 'nodejs-message-broker'

const service = new MessageBrokerClient({
  host: 'proxy',
  port: 8888,
  reconnect: true,
  reconnectInterval: 1000,
  action: 'service_2',
  secureKey: 'test',
  requestHandler: async (data, options) => {
    try {
      return { data, options };
    } catch ( error ) {
      console.log({ error })
    }
  }
});

