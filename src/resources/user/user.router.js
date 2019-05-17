import { Router } from 'express';
import authenticate from '../../middleware/authenticate';
import { loginUser, me, signin } from './user.controller';

const router = Router();

router.post('/', signin);
router.post('/login', loginUser);
router.get('/me', authenticate, me);

export default router;
