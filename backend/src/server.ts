import express from 'express';
import cors from 'cors';

import database from '../database/frostFree.json';

const app = express();

app.use(express.json());

app.use(cors());

app.listen(process.env.PORT || 3333, () => {
  console.log(database.length);
  console.log('Server on!');
});
