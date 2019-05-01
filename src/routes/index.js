import { Router } from 'express';
import {
  addTodo,
  getTodo,
  getTodos,
  removeTodo,
  updateTodo,
} from '../controllers/todoController';
import { loginUser, registerUser } from '../controllers/userController';
import { catchErrors } from '../handlers/errorHandler';

const router = Router();

router.post('/todos', catchErrors(addTodo));
router.get('/todos', catchErrors(getTodos));
router.get('/todos/:id', catchErrors(getTodo));
router.delete('/todos/:id', catchErrors(removeTodo));
router.patch('/todos/:id', catchErrors(updateTodo));
router.post('/users', catchErrors(registerUser));
router.post('/users/login', catchErrors(loginUser));

export default router;
