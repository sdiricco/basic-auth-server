import mongoose, { Schema, Document } from 'mongoose';

export interface IInfo extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  title: string;
  content: string;
}

const InfoSchema: Schema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
}, { collection: 'info' });  // Specifica il nome della collection

export const Info = mongoose.model<IInfo>('Info', InfoSchema);
