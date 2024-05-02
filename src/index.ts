import express, { Express, Request, Response } from 'express';
import * as dotenv from 'dotenv'
dotenv.config()
import logger from './utils/logger';
import morgan from 'morgan';
import connectToDb from './services/db.services';

dotenv.config()

const app: Express = express();
const port = 3333;

app.use(
  morgan('combined', {
    stream: {
      write: (message) => logger.info(message.trim()),
    },
  }),
);

connectToDb();

app.get('/', (req: Request, res: Response) => {
  logger.debug('Handling "/" route');
  res.send('Hello world');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
