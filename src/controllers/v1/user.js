import { User } from '../../models/user.js';
import { compareHashPassword, hashPassword } from '../../utils/authUtil.js';

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(401).json({ message: 'Please fill all fields' });
    }

    const existUser = await User.findOne({ username }).select('+password');

    if (!existUser) {
      return res.status(401).json({ message: 'Invalid username' });
    }

    const isPasswordMatch = await compareHashPassword(password, existUser.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    return res.status(200).json({ message: 'Login successful', user: existUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

export const register = async (req, res) => {
  try {
    const { username, password, email, phone, address } = req.body;
    if (!username || !password) {
      return res.status(401).json({ message: 'Please fill all required fields' });
    }
    const existUser = await User.findOne({ username: username });
    if (existUser) {
      return res.status(400).json({ message: 'Username already existed' });
    }

    if (password && password.length <= 6) {
      return res.json({
        message: 'Please provide a password with more than 6 characters',
      });
    }

    const user = await User.create({
      username: username,
      password: await hashPassword(password),
      email: email,
      phone: phone,
      address: address,
    });

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

export const updateUser = () => {};
export const deleteUser = () => {};
