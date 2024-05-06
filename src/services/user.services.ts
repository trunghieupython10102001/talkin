import bcrypt from 'bcrypt';
import { IUser } from '../interfaces/User.interface';
import User from '../models/User.model';
import logger from '../utils/logger';

export const createUser = async (user: IUser) => {
  try {
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(user.password, saltRounds);
    const createdUser = User.create({ ...user, password: hashedPassword });
    return createdUser;
  } catch (err: any) {
    logger.error('Create user is failed', err);
    throw new Error('Create user is failed');
  }
};
