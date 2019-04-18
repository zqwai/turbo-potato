const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

mongoose.connect('mongodb://127.0.0.1:27017/?admin=mongodb');

let todoSchema = new mongoose.Schema({
  item: String,
});

let Todo = mongoose.model('todo', todoSchema);

// let itemOne = Todo({item: 'by flowers2'}).save(function(error) {
//   if(error) throw error;
//   console.log('item saved');
// })

let data = [
  // {
  //   item: 'aaaa'
  // },
  // {
  //   item: 'bbbb'
  // },
  // {
  //   item: 'cccc'
  // },
  // {
  //   item: 'dddd'
  // },
]

const todoController = function(app) {
  // get
  app.get('/todo', (req, res) => {
    // res.send('yes');
    Todo.find({},function(err,data) {
      if(err) throw err;
      res.render('todo',{todos: data});
    })
    
  });
  // post
  app.post('/todo', urlencodedParser, (req, res) => {
    // data.push(req.body);
    // res.json(data);
    let itemOne = Todo(req.body).save(function(error, data) {
    if(error) throw error;
      console.log('item saved');
      res.json(data);
    })
  });
  // delete
  app.delete('/todo/:item', (req, res) => {
    // data = data.filter(function(todo) {
    //   return todo.item.replace(/ /g, "-") !== req.params.item;
    // });
    Todo.find({item: req.params.item.replace(/-/g,' ') }).remove((error, data) => {
      if (error) throw error;
      console.log('del:' + req.params.item.replace(/-/g,' '));
      res.json(data);
    })
    // res.json(data);
  });
};

module.exports = todoController;
