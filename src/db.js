import mongoose from 'mongoose';
import './models/User';
// Import data model
import './resources/todo/todo.model';

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true,
});
mongoose.connection.on('error', err => {
  console.log(`🙅 Error => ${err.message}`);
});
