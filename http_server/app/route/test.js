import { bus } from '../bus';

export async function test (req, res, next) {
  try {
    const response = await bus.request({
      action: 'service_1',
      data: { message: 'echo' }
    }, { ttl: 30000 }, 10000);
    res.status(202).json(response);
  } catch (e) {
    res.status(400).json(e);
  }
}
