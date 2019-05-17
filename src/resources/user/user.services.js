import User from './user.model';

export const createUser = async (email, password) => {
  const user = await new User({ email, password }).save();
  return user;
};

export const findUser = async email => {
  const user = await User.findOne({ email });
  return user;
};
