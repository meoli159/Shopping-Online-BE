import express from 'express';
import { createCategory, deleteCategory, getCategories, updateCategory } from '../../controllers/v1/category.js';
import { authMiddleware, isAdminMiddleware, isStaffMiddleware } from '../../middlewares/authMiddleware.js';
const categoryRoutes = express.Router();

//Public route
categoryRoutes.get('/', getCategories);

//Protected route
categoryRoutes.use(isAdminMiddleware);
categoryRoutes.post('/', isStaffMiddleware, createCategory);
categoryRoutes.patch('/:id', isStaffMiddleware, updateCategory);
categoryRoutes.delete('/:id', deleteCategory);
export { categoryRoutes };
