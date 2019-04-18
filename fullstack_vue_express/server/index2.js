const express = require('express');
// const bodyPress = require('body-parser');
// const cors = require('cors');
// controllers
const todoController = require('./controllers/todoController');

const app = express();

// middleware
// app.use(bodyPress.json());
// app.use(cors());
// server port
const port = process.env.PORT || 5000;
// 引用模版文件
app.set('view engine', 'ejs');
// 引用静态文件
app.use(express.static('./public'));



// // Handle production
// if (process.env.NODE_ENV === 'production') {
//   // Static folder
//   app.use(express.static(__dirname + '/public/'));

//   // Handle SPA
//   app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
// }

// app.get('/',(req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// // 端口
// app.get('/article/:id/:name', (req, res, next) => {
//   let data = [
//     {
//       name: 'david',
//       age: '22',
//     },
//     {
//       name: 'lucy',
//       age: '24',
//     },
//   ];
//   // 输出 prot id
//   let hello = '输出端口';
//   console.log(req.params)
//   res.send(`
//     <h4>${hello}: </h4>
//     <p>ID: ${req.params.id} </p>
//     <p>Name: ${req.params.name}</p>
//   `);
// });

// routes 1
// const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');
// app.use('/', indexRouter);
// app.use('/user', usersRouter);

// routes 2
todoController(app);


app.listen(port, () => {
  console.log(`server start on ${port}, open http://localhost:${port}`);
})