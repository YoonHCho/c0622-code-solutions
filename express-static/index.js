const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('public'));
app.use('public/', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  console.log('REQQQ', req);
  res.json(res.body);
});

console.log(path);
console.log(__dirname);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
