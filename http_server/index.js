import express from 'express';
import { cors, test } from './app';
const app = express();

app.use(cors);
app.post('/test', test);

app.listen(8000, () => {
  console.log('App started')
});


