// initializing npm and download express
const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const getArray = [];
  for (const id in grades) {
    getArray.push(grades[id]);
  }
  res.json(getArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  res.status(201);
  req.body.id = nextId;
  grades[nextId] = req.body;
  nextId++;
  res.json(req.body);
  res.end();
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
