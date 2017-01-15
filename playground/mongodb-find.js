const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect: ', err);
  }
  console.log('Connect to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('587a123a7161ba06a7ecd7ee')
  // }).toArray()
  //   .then((docs) => {
  //     console.log(JSON.stringify(docs, undefined, 2));
  //   })
  //   .catch(err => console.log('Unable to fetch todos', err));

   db.collection('Todos').find().count()
    .then((count) => {
      console.log(`Todos count: ${count}`);
    })
    .catch(err => console.log('Unable to fetch todos', err));
});
