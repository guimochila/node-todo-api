// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect: ', err);
  }
  console.log('Connect to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something todo',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Guilhemre',
    age: 32,
    location: 'Spain'
  }, (err, result) => {
    if (err) {
      return console.log('Error: ', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
    console.log('Date: ' + result.ops[0]._id.getTimestamp());
  });
  db.close();
});
