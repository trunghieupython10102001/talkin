import express from 'express';
import { registerUser } from '../controllers/user.controller';

const router = express.Router();

router.post('/user', registerUser);

export default router;
