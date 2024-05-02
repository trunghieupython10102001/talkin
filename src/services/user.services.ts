import jwt from 'jsonwebtoken'
import { IUser } from "../interfaces/User.interface";
import User from "../models/User.model";

export const createUser = (user: IUser) => {
  try {
    const createdUser = User.create(user);

  } catch(err) {

  }
}