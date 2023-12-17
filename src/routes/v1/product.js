import express from 'express';
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetail,
} from '../../controllers/v1/product.js';
import { authMiddleware, isAdminMiddleware, isStaffMiddleware } from '../../middlewares/authMiddleware.js';
const productRoutes = express.Router();

//Public route
productRoutes.get('/', getAllProducts);
productRoutes.get('/:id', getProductDetail);

//Protected route
productRoutes.use(isAdminMiddleware);
productRoutes.post('/', isStaffMiddleware, createProduct);
productRoutes.patch('/:id', isStaffMiddleware, updateProduct);
productRoutes.delete('/:id', deleteProduct);
export { productRoutes };
