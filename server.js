const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const burglary = require('./routes/burglary');

app.get('/', (req, res, next) => {
  res.send('hello-world');
});

app.use('/burglary', burglary);
app.listen(9000);
