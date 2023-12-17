import { User } from '../../models/user.js';
import { compareHashPassword, hashPassword } from '../../utils/authUtil.js';
import { generateAccessToken, generateRefreshToken } from '../../utils/jwtUtil.js';

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
    const access_token = generateAccessToken({ id: existUser.id, role: existUser.roles });
    res.cookie('token', access_token, {
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
      path: '/',
    });
    const refresh_token = generateRefreshToken({ id: existUser.id, role: existUser.roles });

    return res.status(200).json({
      message: 'Login successful',
      data: existUser,
      access_token: access_token,
      refresh_token: refresh_token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

export const register = async (req, res) => {
  try {
    const { username, password, email, address, phone } = req.body;
    const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const checkMail = reg.test(email);

    if (!username || !password) {
      return res.status(401).json({ message: 'Please fill all required fields' });
    }
    const existUser = await User.findOne({ username: username });
    if (existUser) {
      return res.status(400).json({ message: 'Username already existed' });
    }
    if (!checkMail) {
      return res.json({
        message: 'Invalid Mail',
      });
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

export const logOut = async (req, res) => {
  try {
    res.clearCookie('token');
    res.status(200).json('LogOut successful!');
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

export const updateUser = async (id) => {
  try {
    const { username, password, email, address, phone } = req.body;
    const reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const checkMail = reg.test(email);

    if (!username || !password) {
      return res.status(401).json({ message: 'Please fill all required fields' });
    }
    const existUser = await User.findOne({ username: username });
    if (existUser) {
      return res.status(400).json({ message: 'Username already existed' });
    }
    if (!checkMail) {
      return res.json({
        message: 'Invalid Mail',
      });
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
export const deleteUser = (id) => {};
