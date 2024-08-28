import mongoose, { Schema, Document } from 'mongoose';

export interface ITodo extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  title: string;
  content: string;
}

const ITodoSchema: Schema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
}, { collection: 'todo' }); 

export const Todo = mongoose.model<ITodo>('Todo', ITodoSchema);
