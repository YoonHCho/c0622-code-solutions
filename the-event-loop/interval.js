let counter = 3;
let $intID = setInterval(() => {
  if (counter > 0) {
    console.log(counter);
    --counter;
  } else {
    console.log('Blast Off!');
    clearInterval($intID);
    $intID = null;
  }
}, 1000);
