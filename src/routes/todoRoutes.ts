import { Router } from 'express';
import { TodoController } from '../controllers/TodoController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

// Rotte CRUD per l'endpoint "info"
router.post('/user/:userId/todo', authMiddleware, TodoController.create);
router.get('/user/:userId/todo/:todoId', authMiddleware, TodoController.get);
router.get('/user/:userId/todo', authMiddleware, TodoController.getAll);
router.put('/user/:userId/todo/:todoId', authMiddleware, TodoController.update);
router.delete('/user/:userId/todo/:todoId', authMiddleware, TodoController.delete);

export default router;
