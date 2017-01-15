const {
  MongoClient,
  ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect: ', err);
  }
  console.log('Connect to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'})
  //   .then(result => console.log(result));


  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat Lunch'})
  //  .then(result => console.log(result)); 

  // findOneAndDelete
  //  db.collection('Todos').findOneAndDelete({completed: false})
  //   .then(result => console.log(result));

  // db.collection('User').deleteMany({name: 'John'});

  // db.collection('Users').findOneandDelete({_id: new ObjectID('')})

  // db.close();
});
