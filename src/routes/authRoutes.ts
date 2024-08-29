import { Router } from 'express';
import { AuthController } from '../controllers/authController';

const router = Router();

//User Registration api 
router.post('/register', AuthController.register);

//User Login api
router.post('/login', AuthController.login);

export default router;
