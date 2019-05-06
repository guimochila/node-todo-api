import { Router } from 'express';
import { isObjectIdValid, methodNotAllowed } from '../../middleware/helpers';
import {
  addTodo,
  getTodo,
  getTodos,
  removeTodo,
  updateTodo,
} from './todo.controller';

const router = Router();

// Handle /todos requests
router
  .route('/')
  .post(addTodo)
  .get(getTodos)
  .all(methodNotAllowed);

router
  .route('/:id')
  .get(isObjectIdValid, getTodo)
  .put(isObjectIdValid, updateTodo)
  .delete(isObjectIdValid, removeTodo)
  .all(methodNotAllowed);

export default router;
