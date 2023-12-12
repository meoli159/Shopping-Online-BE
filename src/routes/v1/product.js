import express from 'express';
import { getAllProducts, createProduct, updateProduct, deleteProduct } from '../../controllers/v1/product.js';
const productRoutes = express.Router();

productRoutes.get('/', getAllProducts);
productRoutes.post('/', createProduct);
productRoutes.patch('/:id', updateProduct);
productRoutes.delete('/:id', deleteProduct);
export { productRoutes };
