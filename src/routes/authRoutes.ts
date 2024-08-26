import { Router } from 'express';
import { AuthController } from '../controllers/authController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.get('/protected', authMiddleware, AuthController.getProtectedResource);

export default router;
