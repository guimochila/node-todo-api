import { model } from 'mongoose';
import isObjectIdValid from '../handlers/helpers';

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

/**
 *  Get Todo - method GET
 * */
export const getTodo = async (req, res) => {
  const id = isObjectIdValid(req.params.id);

  const todo = await Todo.findById(id);

  if (!todo) {
    res.status(404).json({ message: 'Todo not found' });
    return;
  }
  res.json(todo);
};

/**
 *  Remove Todo - method DELETE
 * */
export const removeTodo = async (req, res) => {
  const id = isObjectIdValid(req.params.id);

  const todo = await Todo.findOneAndDelete({ _id: id });

  if (!todo) {
    res.status(404).json({ message: 'Todo not found' });
    return;
  }

  res.json(todo);
};

/**
 *  Update Todo - method PATCH
 * */
export const updateTodo = async (req, res) => {
  const id = isObjectIdValid(req.params.id);

  const todo = await Todo.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    },
    {
      new: true,
      runValidators: true,
    },
  );

  if (!todo) {
    res.status(404).json({ message: 'Todo not found' });
    return;
  }

  res.json(todo);
};
