const {
  MongoClient,
  ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect: ', err);
  }
  console.log('Connect to MongoDB server');
  const mongo = db.collection('Users');

  // mongo.findOneAndUpdate({
  //   _id: new ObjectID('587a291edc4c8f0473a2d80e')
  // }, {
  //   $set: {
  //     completed: false
  //   } 
  // }, {
  //   returnOriginal: false
  // }).then(result => console.log(result));

  mongo.findOneAndUpdate({
    name: 'Brian'
  }, {
    $set: {
      location: 'Denmark'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then(result => console.log(result));

  

  // db.close();
});
