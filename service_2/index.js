import { MessageBrokerClient } from 'nodejs-message-broker'

const service = new MessageBrokerClient({
  host: 'proxy',
  port: 8888,
  reconnect: true,
  reconnectInterval: 1000,
  id: 'service_2',
  secureKey: 'testtesttesttesttesttesttesttest',
  requestHandler: async (data, options) => {
    try {
      console.log({data, options})
      return { data, options };
    } catch ( error ) {
      console.log({ error })
    }
  }
});

