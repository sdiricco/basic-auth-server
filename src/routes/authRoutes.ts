import { Router } from 'express';
import { AuthController } from '../controllers/authController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

//User Registration api 
router.post('/register', authMiddleware, AuthController.register);

//User Login api
router.post('/login', authMiddleware, AuthController.login);

export default router;
