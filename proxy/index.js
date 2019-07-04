import { MessageBrokerLoadBalancer } from 'nodejs-message-broker';

const proxy = new MessageBrokerLoadBalancer({
  port: 8888,
  instances: [
    {
      host: 'message_broker_1',
      port: 8887
    },
    {
      host: 'message_broker_2',
      port: 8886
    }
  ]
});
