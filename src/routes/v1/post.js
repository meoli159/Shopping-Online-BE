import express from 'express';
import {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
} from '../../controllers/v1/post.js';
const postRoutes = express.Router();

postRoutes.get('/', getAllPosts);
postRoutes.post('/', createPost);
postRoutes.patch('/:id', updatePost);
postRoutes.delete('/:id', deletePost);
export { postRoutes };
