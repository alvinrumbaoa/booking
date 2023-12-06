// models/Booking.js
import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  photographer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  sessionDate: Date,
  sessionType: { type: String, enum: ['wedding', 'portrait', 'event', 'other'] },
  status: { type: String, enum: ['pending', 'confirmed', 'completed', 'cancelled'], default: 'pending' },
  notes: String,
  // Other fields like session duration, location, etc.
});

export default mongoose.models.Booking || mongoose.model('Booking', bookingSchema);
