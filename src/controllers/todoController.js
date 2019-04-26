import { model } from 'mongoose';

const Todo = model('Todo');

/**
 *  Add new Todos - method POST
 * */
export const addTodo = async (req, res) => {
  const todo = await new Todo(req.body).save();
  res.json(todo);
};

/**
 *  Get Todos - method GET
 * */
export const getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};

// /*
//   GET /todos
// */
// app.get('/todos', authenticate, (req, res) => {
//   Todo.find({
//     _creator: req.user._id,
//   })
//     .then(todos => {
//       res.send({
//         todos,
//       });
//     })
//     .catch(e => res.status(400).send(e));
// });

// /*
//   GET /todos/:id
// */
// app.get('/todos/:id', authenticate, (req, res) => {
//   const { id } = req.params;

//   if (!ObjectID.isValid(id)) {
//     return res.status(404).send();
//   }

//   Todo.findOne({
//     _id: id,
//     _creator: req.user._id,
//   })
//     .then(todo => {
//       if (!todo) {
//         return res.status(404).send();
//       }

//       res.send({
//         todo,
//       });
//     })
//     .catch(e => res.status(400).send());
// });

// /*
//   DELETE /todos/:id
// */
// app.delete('/todos/:id', authenticate, (req, res) => {
//   const { id } = req.params;

//   if (!ObjectID.isValid(id)) {
//     return res.status(404).send();
//   }

//   Todo.findOneAndRemove({
//     _id: id,
//     _creator: req.user._id,
//   })
//     .then(todo => {
//       if (!todo) {
//         return res.status(404).send();
//       }

//       res.send({
//         todo,
//       });
//     })
//     .catch(e => res.status(400).send());
// });

// /*
//   PATCH /todos/:id - Update
// */
// app.patch('/todos/:id', authenticate, (req, res) => {
//   const { id } = req.params;
//   const body = _.pick(req.body, ['text', 'completed']);

//   if (!ObjectID.isValid(id)) {
//     return res.status(404).send();
//   }

//   if (_.isBoolean(body.completed) && body.completed) {
//     body.completedAt = new Date().getTime();
//   } else {
//     body.completed = false;
//     body.completedAt = null;
//   }

//   Todo.findOneAndUpdate(
//     {
//       _id: id,
//       _creator: req.user._id,
//     },
//     {
//       $set: body,
//     },
//     {
//       new: true,
//     },
//   )
//     .then(todo => {
//       if (!todo) {
//         return res.status(404).send();
//       }

//       res.send({
//         todo,
//       });
//     })
//     .catch(e => res.status(400).send());
// });

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