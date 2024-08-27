import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import {config} from "./config";
import authRoutes from './routes/authRoutes';
import infoRoutes from './routes/infoRoutes';


const app = express();

// Middleware e rotte
app.use(cors())
app.use(express.json());
// Rotte per l'autenticazione
app.use('/api', authRoutes);
// Rotte per la gestione delle info
app.use('/api', infoRoutes);

// Connessione a MongoDB
mongoose.connect(config.db.uri || '').then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('MongoDB connection error:', error);
});

export default app;
