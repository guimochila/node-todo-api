const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todos');

/* Todo.remove({}).then((result) => {
  console.log(result);
}); */

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({ _id: '587e741757b2822103b5ecd8'}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('587e741757b2822103b5ecd8').then((todo) => {
  console.log(todo);
});
