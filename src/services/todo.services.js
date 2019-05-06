import { model } from 'mongoose';

const Todo = model('Todo');

const createTodo = async todo => {
  try {
    const newTodo = await new Todo(todo).save();
    return newTodo;
  } catch (e) {
    console.log(e);
    return e;
  }
};

const findTodos = async () => {
  try {
    const todos = await Todo.find({});
    return todos;
  } catch (e) {
    console.log(e);
  }
};

const findOneTodo = async id => {
  try {
    const todo = await Todo.findOne({ _id: id });
    return todo;
  } catch (e) {
    console.log(e);
  }
};

const updateTodo = async (id, update) => {
  try {
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
  } catch (e) {
    console.log(e);
  }
};

const removeTodo = async id => {
  try {
    const todo = await Todo.findByIdAndDelete({ _id: id });
    return todo;
  } catch (e) {
    console.log(e);
  }
};

export default {
  createTodo,
  findTodos,
  findOneTodo,
  updateTodo,
  removeTodo,
};
