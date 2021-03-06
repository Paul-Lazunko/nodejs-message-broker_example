import { MessageBrokerClient } from 'nodejs-message-broker'

const service = new MessageBrokerClient({
  host: 'proxy',
  port: 8888,
  reconnect: true,
  reconnectInterval: 1000,
  id: 'service_1',
  secureKey: 'testtesttesttesttesttesttesttest',
  requestHandler: async (data, options) => {
    try {
      return await service.request({ data, id: 'service_2' }, options, 10000 );
    } catch ( error ) {
      console.log({ error })
    }
  }
});

