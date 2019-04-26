import { model, Schema } from 'mongoose';

const todoSchema = new Schema({
  text: {
    type: String,
    required: 'Please enter a todo name',
    minlength: 1,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  completedAt: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  owner: {
    type: Schema.Types.ObjectId,
  },
});

export default model('Todo', todoSchema);
