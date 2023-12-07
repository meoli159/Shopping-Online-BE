import { Schema, model } from 'mongoose';

const productSchema = new Schema(
  {
    productName: { type: String, require: true },
    description: { type: String, require: true },
    img: { type: String },
    price: { type: Number, require: true },
    quantity: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Product = model('Product', productSchema);
