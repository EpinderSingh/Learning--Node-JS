const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', (req, res, next) => {
  console.log('FIRST Middelware!');
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(3000);
