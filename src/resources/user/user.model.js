import { model, Schema } from 'mongoose';
import { isEmail } from 'validator';

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Invalid email address. Please provide a valid email.'],
  },
  password: {
    type: String,
    require: true,
    minlength: 6,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default model('User', userSchema);
