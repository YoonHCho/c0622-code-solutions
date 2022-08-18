const fs = require('fs');
// const txtFile = process.argv.slice(2);
// console.log(txtFile);
// put readFile in fx, and call everytime it's done
console.log(process.argv[2]);
let counter = 2;
function rFile(num) {
  fs.readFile(process.argv[num], 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log(data);
  });
}

for (var i = 2; i < process.argv.length; i++) {
  if (counter <= process.argv.length - 1) {
    counter++;
    rFile(counter);
  } else {
    counter++;
    rFile(counter);
  }
}

// txtFile.forEach(element => {
//   fs.readFile(element, 'utf8', (err, data) => {
//     if (err) {
//       console.log(err);
//       process.exit(1);
//     }
//     console.log(element);
//     console.log(data);
//   });
// });
