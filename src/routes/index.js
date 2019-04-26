import { Router } from 'express';
import { addTodo } from '../controllers/todoController';
import { catchErrors } from '../handlers/errorHandler';

const router = Router();

router.post('/', catchErrors(addTodo));

export default router;
