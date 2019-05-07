import { model } from 'mongoose';

const Todo = model('Todo');

const createTodo = async todo => {
  const newTodo = await new Todo(todo).save();
  return newTodo;
};

const findTodos = async () => {
  const todos = await Todo.find({});
  return todos;
};

const findOneTodo = async id => {
  const todo = await Todo.findOne({ _id: id });
  return todo;
};

const updateTodo = async (id, update) => {
  const todo = await Todo.findByIdAndUpdate(
    { _id: id },
    {
      ...update,
    },
    {
      new: true,
      runValidators: true,
    },
  );
  return todo;
};

const removeTodo = async id => {
  const todo = await Todo.findByIdAndDelete({ _id: id });
  return todo;
};

export default {
  createTodo,
  findTodos,
  findOneTodo,
  updateTodo,
  removeTodo,
};
