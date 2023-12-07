import express from 'express';
import { postRoutes } from './post.js';
import { authRoutes } from './user.js';
import { commentRoutes } from './comment.js';
const router = express.Router();

router.use('/auth', authRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

export { router as routes };
