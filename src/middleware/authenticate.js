import jwt from 'jsonwebtoken';
import User from '../resources/user/user.model';

const authenticate = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(403).send();
  }

  try {
    const { userId } = jwt.verify(
      token.split('Bearer ')[1],
      process.env.APP_SECRET,
    );
    const user = await User.findById(userId).select('id email');

    if (!user) {
      return res.status(403).send();
    }
    req.user = user;
    return next();
  } catch (e) {
    return next(e);
  }
};

export default authenticate;
