import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { DBConnect } from './models/configs/DBConnect.js';
import { routes } from './routes/v1/index.js';

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(cors({ origin: process.env.REACT_URL }));

app.use('/api/v1', routes);

app.listen(port, async () => {
  await DBConnect();
  console.log(`Example app listening on http://127.0.0.1:${port}`);
});
