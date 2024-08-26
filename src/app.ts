import express from 'express';
import authRoutes from './routes/authRoutes';

const app = express();

// Middleware e rotte
app.use(express.json());
app.use('/api', authRoutes);

export default app;
