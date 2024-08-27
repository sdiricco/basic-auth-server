import { Router } from 'express';
import { InfoController } from '../controllers/infoController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

// Rotte CRUD per l'endpoint "info"
router.post('/user/:userId/info', authMiddleware, InfoController.create);
router.get('/user/:userId/info/:infoId', authMiddleware, InfoController.get);
router.get('/user/:userId/info', authMiddleware, InfoController.getAll);
router.put('/user/:userId/info/:infoId', authMiddleware, InfoController.update);
router.delete('/user/:userId/info/:infoId', authMiddleware, InfoController.delete);

export default router;
