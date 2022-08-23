const express = require('express');
const dataJSON = require('./data.json');
const fs = require('fs');
const app = express();

app.get('/api/notes', (req, res) => {
  res.status(200);
  const arrayData = [];
  for (const key in dataJSON.notes) {
    arrayData.push(dataJSON.notes[key]);
  }
  res.json(arrayData);
});

app.get('/api/notes/:id', (req, res) => {
  const idNum = Number(req.params.id);
  if (idNum < 0 || isNaN(idNum)) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!dataJSON.notes[idNum]) {
    res.status(404).json({ error: 'cannot find note with id ' + idNum });
  } else {
    for (const key in dataJSON.notes) {
      if (dataJSON.notes[key].id === idNum) {
        res.json(dataJSON.notes[key]);
      }
    }
  }
});

app.use(express.json());

app.post('/api/notes/', (req, res) => {
  if (req.body.content) {
    res.status(201);
    req.body.id = dataJSON.nextId;
    dataJSON.notes[dataJSON.nextId] = req.body;
    dataJSON.nextId++;
    const dataJSONString = JSON.stringify(dataJSON, null, 2);
    fs.writeFile('./data.json', dataJSONString, err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.json(req.body);
      }
    });
  } else {
    res.status(400).json({ error: 'content is a required field' });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const idNum = Number(req.params.id);
  if (idNum < 0 || isNaN(idNum)) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (dataJSON.notes[idNum] === undefined) {
    res.status(404).json({ error: 'cannot find note with id ' + idNum });
  } else {
    delete dataJSON.notes[req.params.id];
    const dataJSONString = JSON.stringify(dataJSON, null, 2);
    fs.writeFile('./data.json', dataJSONString, err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const idNum = Number(req.params.id);
  if (idNum < 0 || isNaN(idNum)) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (!req.body.content) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (dataJSON.notes[req.params.id] === undefined) {
    res.status(404).json({ error: 'cannot find note with id ' + idNum });
  } else {
    dataJSON.notes[req.params.id].content = req.body.content;
    const dataJSONString = JSON.stringify(dataJSON, null, 2);
    fs.writeFile('./data.json', dataJSONString, err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.sendStatus(200);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
