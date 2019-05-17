import mongoose from 'mongoose';

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
mongoose.connection.on('error', err => {
  console.log(`🙅 Error => ${err.message}`);
});
