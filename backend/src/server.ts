import express from 'express';
import cors from 'cors';
import router from './routes';

const app = express();

app.use(express.json());

app.use(cors());

app.use((req, res, next) => {
  console.log(`[${req.method}]: ${req.url}`);
  next();
});

app.use(router);

app.listen(process.env.PORT || 3333, () => {
  console.log('Server on!');
});
