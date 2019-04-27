import mongoose from 'mongoose';
// Import data model
import './models/Todos';
import './models/User';

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true,
});
mongoose.connection.on('error', err => {
  console.log(`🙅 Error => ${err.message}`);
});
