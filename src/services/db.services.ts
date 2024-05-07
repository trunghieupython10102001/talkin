import mongoose from 'mongoose';
import logger from '../utils/logger';

const MONGODB_URI = process.env.MONGODB_URI || '';

const connectToDb = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    logger.info('Connected to database');
  } catch (err) {
    logger.error('Failed to connect to database', err);
  }
};

export default connectToDb;
