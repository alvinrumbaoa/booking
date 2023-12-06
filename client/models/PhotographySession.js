// models/PhotographySession.js
import mongoose from 'mongoose';

const photographySessionSchema = new mongoose.Schema({
  type: { type: String, unique: true },
  description: String,
  // You can include fields like default duration, price, etc.
});

export default mongoose.models.PhotographySession || mongoose.model('PhotographySession', photographySessionSchema);
