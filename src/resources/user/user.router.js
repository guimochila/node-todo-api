import { Router } from 'express';
import { loginUser, signin } from './user.controller';

const router = Router();

router.post('/', signin);
router.post('/login', loginUser);

export default router;
