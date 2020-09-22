const express = require('express');

const app = express();

app.use('/user', (req, res, next) => {
  console.log('FIRST Middelware!');
  res.send('<h1>User middelware says HELLO!</h1>');
});
app.use('/', (req, res, next) => {
  console.log('Second Middelware!');
  res.send('<h1>Hello from assignment express!</h1>');
});

app.listen(3000);
