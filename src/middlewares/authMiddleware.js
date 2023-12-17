import jwt from 'jsonwebtoken';
import 'dotenv/config';

export const authMiddleware = (req, res, next) => {
  //   console.log('token: ', req.cookies.token);
  try {
    const access_token = req.cookies.token;
    if (!access_token) return res.status(401).json({ message: "You're not authenticated" });
    jwt.verify(access_token, process.env.SECRET_ACCESS_TOKEN, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Invalid Token' });
      }
      next();
    });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

export const isAdminMiddleware = (req, res, next) => {
  //   console.log('token: ', req.cookies.token);
  try {
    const access_token = req.cookies.token;
    if (!access_token) return res.status(401).json({ message: "You're not authenticated" });
    jwt.verify(access_token, process.env.SECRET_ACCESS_TOKEN, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Invalid Token' });
      }
      if (!user.payload.role.includes('admin')) {
        return res.status(403).send({ message: 'Require Admin Role!' });
      }
      next();
    });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};

export const isStaffMiddleware = (req, res, next) => {
  //   console.log('token: ', req.cookies.token);
  try {
    const access_token = req.cookies.token;
    if (!access_token) return res.status(401).json({ message: "You're not authenticated" });
    jwt.verify(access_token, process.env.SECRET_ACCESS_TOKEN, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Invalid Token' });
      }
      if (user.payload.role.includes('staff')) {
        return res.status(403).send({ message: 'Require Staff Role!' });
      }
      next();
    });
  } catch (error) {
    return res.status(404).json({ message: error });
  }
};
