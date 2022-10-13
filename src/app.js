const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Roses are red, violets are blue, unexpected "}" om line 32' })
});

module.exports = app;