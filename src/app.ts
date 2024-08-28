import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import {config} from "./config";
import authRoutes from './routes/authRoutes';
import todoRoutes from './routes/todoRoutes';


const app = express();

// Middleware e rotte
app.use(cors())
app.use(express.json());
// Rotte per l'autenticazione
app.use('/api', authRoutes);
// Rotte per la gestione dei todo
app.use('/api', todoRoutes);

// Connessione a MongoDB
mongoose.connect(config.db.uri || '').then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('MongoDB connection error:', error);
});

export default app;
