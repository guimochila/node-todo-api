const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todos');
const { User } = require('./models/user');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

/*
  POST /todos
*/
app.post('/todos', (req,res) => {
  const todo = new Todo ({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

/* 
  GET /todos
*/
app.get('/todos', (req, res) => {
  Todo.find().then((todos) =>{
    res.send({todos})
  }).catch(e => res.status(400).send(e));
});

/*
  GET /todos/:id
*/
app.get('/todos/:id', (req, res) => {
  const id = req.params.id;

  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id)
    .then((todo) => {
      if(!todo) {
        return res.status(404).send();
      }
      
      res.send({ todo });
    }).catch(e => res.status(400).send());
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = { app };
