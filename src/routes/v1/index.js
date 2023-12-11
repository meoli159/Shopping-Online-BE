import express from 'express';
import { productRoutes } from './post.js';
import { authRoutes } from './user.js';
// import { commentRoutes } from './comment.js';
const router = express.Router();

router.use('/auth', authRoutes);
router.use('/product', productRoutes);
// router.use('/comments', commentRoutes);

export { router as routes };
