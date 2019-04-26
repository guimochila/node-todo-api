import { Router } from 'express';
import {
  addTodo,
  getTodo,
  getTodos,
  removeTodo,
} from '../controllers/todoController';
import { catchErrors } from '../handlers/errorHandler';

const router = Router();

router.post('/', catchErrors(addTodo));
router.get('/', catchErrors(getTodos));
router.get('/:id', catchErrors(getTodo));
router.delete('/:id', catchErrors(removeTodo));

export default router;
