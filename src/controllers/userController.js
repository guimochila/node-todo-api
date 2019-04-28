import bcrypt from 'bcryptjs';
import { model } from 'mongoose';
import { isEmail, isLength } from 'validator';

const User = model('User');

export const registerUser = async (req, res) => {
  const { email, password } = req.body;

  if (!isEmail(email)) {
    return res.status(400).json({
      message: 'Invalid email address. Please provide a valid email.',
    });
  }

  if (!isLength(password, { min: 5, max: 30 })) {
    return res
      .status(400)
      .json({ message: 'Password must be between 5 and 30 characters long.' });
  }

  const hashPassword = await bcrypt.hash(password, 10);

  try {
    await new User({ email, password: hashPassword }).save();
  } catch (e) {
    if (e.message.includes('E11000 duplicate key error collection')) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    throw new Error(e.message);
  }

  return res.json({ message: 'User created with success.' });
};

export const updateUser = (req, res) => {};

// /*
//   POST /users
// */
// app.post('/users', (req, res) => {
//   const body = _.pick(req.body, ['email', 'password']);
//   const user = new User({
//     email: body.email,
//     password: body.password,
//   });

//   user
//     .save()
//     .then(() => {
//       return user.generateAuthToken();
//     })
//     .then(token => res.header('x-auth', token).send(user))
//     .catch(e => res.status(400).send(e));
// });

// /*
//   GET /users/me
// */
// app.get('/users/me', authenticate, (req, res) => {
//   res.send(req.user);
// });

// /*
//   POST /users/login
// */
// app.post('/users/login', (req, res) => {
//   const body = _.pick(req.body, ['email', 'password']);

//   User.findByCredentials(body.email, body.password)
//     .then(user => {
//       user.generateAuthToken().then(token => {
//         res.header('x-auth', token).send(user);
//       });
//     })
//     .catch(e => {
//       res.status(400).send();
//     });
// });

// /*
//   DELETE /users/login
// */
// app.delete('/users/me/token', authenticate, (req, res) => {
//   req.user
//     .removeToken(req.token)
//     .then(() => {
//       res.status(200).send();
//     })
//     .catch(() => res.status(400).send());
// });
