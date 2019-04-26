import { Router } from 'express';
import { addTodo } from '../controllers/todoController';

const router = Router();

router.post('/', addTodo);

export default router;
