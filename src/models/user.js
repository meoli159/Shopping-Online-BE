import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    username: { type: String, require: true, trim: true, unique: true },
    password: { type: String, require: true, select: false, trim: true },
    email: { type: String, trim: true },
    phone: { type: Number, trim: true },
    address: { type: String, trim: true },
  },
  { timestamps: true }
);

userSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

export const User = model('User', userSchema);
