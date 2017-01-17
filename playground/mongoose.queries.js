const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todos');

var id = '587e65e85bda0f19e6ea7451';

if(!ObjectID.isValid(id)) {
  return console.log('Id not valid');
}

// Todo.find({ _id: id }).then((todos) => console.log('Todos: ', todos));

// Todo.findOne({ _id: id }).then((todo) => console.log('Todo: ', todo));

// Best practice to find documents by id
Todo.findById(id).then((todo) => {
  if (!todo){
    return console.log('Id not found');
  }
  console.log('Todo by Id: ', todo)
}).catch(e => console.log(e));
