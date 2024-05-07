import express, { Express } from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();
import logger from './utils/logger';
import morgan from 'morgan';
import connectToDb from './services/db.services';
import initializeRouter from './routes';

const app: Express = express();
const port = 3333;

app.use(cors());

app.use(
  morgan('combined', {
    stream: {
      write: (message) => logger.info(message.trim()),
    },
  }),
);

connectToDb();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
initializeRouter(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
