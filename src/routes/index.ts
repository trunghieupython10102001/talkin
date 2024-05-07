import { Express } from 'express';
import userRouter from '../routes/user.route';

const initializeRouter = (app: Express) => {
  app.use('/user', userRouter);
};

export default initializeRouter;
