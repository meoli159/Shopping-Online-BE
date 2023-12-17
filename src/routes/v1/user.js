import express from 'express';
import { logOut, login, register } from '../../controllers/v1/user.js';
import { authMiddleware } from '../../middlewares/authMiddleware.js';

const authRoutes = express.Router();
authRoutes.post('/login', login);
authRoutes.post('/register', register);
authRoutes.post('/logout', authMiddleware, logOut);
export { authRoutes };
