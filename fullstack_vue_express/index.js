// const express = require('express');
const express = require('express');
// const ejs = require('ejs');
// controllers
const todoController = require('./controllers/todoController');
// 引用express
const app = express();

// 引用模版文件
app.set('view engine', 'ejs');
// 引用静态文件
app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.send('yes')
});
// routes
todoController(app);


// server port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server start on ${port}, open http://localhost:${port}`);
})