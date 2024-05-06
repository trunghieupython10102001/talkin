import { Request, Response } from 'express';
import { createUser } from '../services/user.services';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const createdUser = createUser(user);

    res.status(201).json(createdUser);
  } catch (error) {
    res.status(400).send('Something went wrong');
  }
};

