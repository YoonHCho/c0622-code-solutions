const dataJSON = require('./data.json');
const fs = require('fs');

function write(string) {
  fs.writeFile('./data.json', string, 'utf8', err => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  });
}

if (process.argv[2] === 'read') {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      process.exit(1);
    } else {
      for (let i = 1; i < dataJSON.nextId; i++) {
        console.log(i + ': ' + dataJSON.notes[i]);
      }
    }
  });
}

if (process.argv[2] === 'create') {
  dataJSON.notes[`${dataJSON.nextId}`] = `${process.argv[3]}`;
  dataJSON.nextId++;
  const stringJSON = JSON.stringify(dataJSON, null, 2);
  write(stringJSON);
}

if (process.argv[2] === 'delete') {
  delete dataJSON.notes[parseInt(process.argv[3])];
  dataJSON.nextId--;
  const stringJSON = JSON.stringify(dataJSON, null, 2);
  write(stringJSON);
}

if (process.argv[2] === 'update') {
  dataJSON.notes[parseInt(process.argv[3])] = process.argv[4];
  const stringJSON = JSON.stringify(dataJSON, null, 2);
  write(stringJSON);
}
