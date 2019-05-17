import { model } from 'mongoose';
import './todo.model';

const Todo = model('Todo');

const createTodo = async todo => {
  const newTodo = await new Todo(todo).save();
  return newTodo;
};

const findTodos = async userId => {
  const todos = await Todo.find({ owner: userId });
  return todos;
};

const findOneTodo = async (id, userId) => {
  const todo = await Todo.findOne({ _id: id, owner: userId });
  return todo;
};

const updateTodo = async (id, update, userId) => {
  const todo = await Todo.findOneAndUpdate(
    { _id: id, owner: userId },
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

const removeTodo = async (id, userId) => {
  const todo = await Todo.findOneAndDelete({ _id: id, owner: userId });
  return todo;
};

export default {
  createTodo,
  findTodos,
  findOneTodo,
  updateTodo,
  removeTodo,
};
