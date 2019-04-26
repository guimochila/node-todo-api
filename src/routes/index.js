import { Router } from 'express';
import { addTodo, getTodos } from '../controllers/todoController';
import { catchErrors } from '../handlers/errorHandler';

const router = Router();

router.post('/', catchErrors(addTodo));
router.get('/', catchErrors(getTodos));

export default router;
