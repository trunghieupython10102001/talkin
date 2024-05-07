import { Request, Response } from 'express';
import { createUser } from '../services/user.services';
import logger from '../utils/logger';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const createdUser = await createUser(user);
    logger.info('User created', createdUser);
    res.status(201).json(createdUser);
  } catch (error) {
    logger.error('Create user failed', error);
    res.status(400).send('Something went wrong');
  }
};
