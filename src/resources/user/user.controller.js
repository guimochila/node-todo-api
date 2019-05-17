import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { isEmail, isLength } from 'validator';
import { createUser, findUser } from './user.services';

export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ data: { error: 'Email or password not in the request.' } });
  }

  if (!isEmail(email)) {
    return res
      .status(400)
      .json({ data: { error: 'Email not valid. Enter a valid email.' } });
  }

  if (!isLength(password, { min: 6, max: 30 })) {
    return res.status(400).json({
      data: { error: 'Password must contain between 6 and 30 characters' },
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await createUser(email, hashedPassword);
    return res.status(201).json({ data: { email: user.email, status: 'ok' } });
  } catch (e) {
    if (e.message.includes('E11000 duplicate key error collection')) {
      return res.status(400).json({ data: { error: 'Email already in use' } });
    }

    return next(e);
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await findUser(email);

  if (!user) {
    return res.status(401).json({
      data: { error: 'Email or password invalid.' },
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({
      data: { error: 'Email or password invalid.' },
    });
  }

  // Generate JWT
  const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

  res.header('X-Authorization', token);
  return res.json({ message: 'Ok' });
};

export const me = (req, res) => {
  if (!req.user) {
    return res.status(403).send();
  }

  return res.json({ data: { me: req.user.email } });
};
