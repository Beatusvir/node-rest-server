const express = require('express');
const app = express();
const port = process.env.PORT || 5000
const data = require('./data/gothedistance.json');

app.listen(port, () => {
  console.log('====================================');
  console.log(`Server up, listening on port ${port}`);
  console.log('====================================');
});

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/goTheDistance', function(req, res) {
  res.send(JSON.stringify(data));
});