// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String, // Store a hashed password, not plain text
  role: { type: String, enum: ['customer', 'photographer', 'admin'], default: 'customer' },
  // Additional fields like address, phone number, etc.
});

export default mongoose.models.User || mongoose.model('User', userSchema);
