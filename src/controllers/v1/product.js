import { Product } from '../../models/product.js';
import { User } from '../../models/user.js';

export const getAllProducts = async (req, res) => {
  try {
    const Products = await Product.find();

    if (!Products.length > 0) return res.json({ message: 'There is no product!!' });
    return res.status(200).json(Products);
  } catch (error) {
    console.error(error);
    res.status(400).send('Bad Request');
  }
};

export const createProduct = async (req, res) => {
  try {
    const { ownerId, title, content, tags } = req.body;
    const user = await User.findById(ownerId);
    if (!user) return res.status(404).send('Please Login');
    const Product = await Product.create({
      owner: user._id,
      title: title,
      content: content,
      tags: tags,
    });
    return res.status(200).json(Product);
  } catch (error) {
    console.error(error);
    res.status(400).send('Bad Request');
  }
};
export const updateProduct = async (req, res) => {
  const { owner, title, content, tag } = req.body;
  const { id } = req.params;
};
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
};
