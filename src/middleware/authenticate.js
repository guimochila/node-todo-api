import jwt from 'jsonwebtoken';
import User from '../resources/user/user.model';

const authenticate = (req, res, next) => {
  try {
    const token = req.header('Authorization');
    const userId = jwt.verify(
      token.split('Bearer ')[1],
      process.env.APP_SECRET,
    );
    const user = User.findById(userId);

    if (!user) {
      return res.status(403).send();
    }

    return next();
  } catch (e) {
    return next(e);
  }
};

export default authenticate;
