import { Router } from 'express';
import { InfoController } from '../controllers/infoController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

// Rotte CRUD per l'endpoint "info"
router.post('/info', authMiddleware, InfoController.create);
router.get('/info/:id', authMiddleware, InfoController.get);
router.get('/info', authMiddleware, InfoController.getAll);
router.put('/info/:id', authMiddleware, InfoController.update);
router.delete('/info/:id', authMiddleware, InfoController.delete);

export default router;
