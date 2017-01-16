const mongoose = require('mongoose');

/*
  Setting Mongoose to use Promises
*/
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = { mongoose };
