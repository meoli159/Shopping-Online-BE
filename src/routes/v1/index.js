import express from 'express';
import { productRoutes } from './product.js';
import { authRoutes } from './user.js';
// import { commentRoutes } from './order.js';
const router = express.Router();

router.use('/auth', authRoutes);
router.use('/posts', productRoutes);
// router.use('/comments', commentRoutes);

export { router as routes };
