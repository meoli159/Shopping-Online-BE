import { Category } from '../../models/category.js';

export const getCategories = async (req, res) => {
  try {
    const allCategories = await Category.find();

    if (!allCategories.length > 0) {
      return res.json({ message: 'There is no category!!' });
    }
    return res.json(allCategories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

export const createCategory = async (req, res) => {
  try {
    const { categoryName } = req.body;
    const existCategory = await Category.findOne({ categoryName: categoryName });
    if (existCategory) return res.status(400).send('Category already existed!');

    const result = await Category.create({
      categoryName: categoryName,
    });
    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(400).send('Bad Request');
  }
};

export const updateCategory = () => {};
export const deleteCategory = () => {};
