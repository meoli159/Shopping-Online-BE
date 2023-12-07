import express from 'express';
import { login, register } from '../../controllers/v1/user.js';

const authRoutes = express.Router();
authRoutes.post('/login', login);
authRoutes.post('/register', register);
export { authRoutes };
