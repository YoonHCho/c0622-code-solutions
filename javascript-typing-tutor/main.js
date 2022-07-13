var char = document.querySelectorAll('span');
var index = 0;
var typos = 0;
document.addEventListener('keydown', checkKey);
/* console.log(char);
console.dir(char); */
function checkKey(event) {
  if (char[index].textContent === event.key) {
    char[index].className = 'correct';
    index++;
    char[index].className = 'current';
  } else {
    char[index].className = 'incorrect';
    typos++;
  }
}

if (char[char.length - 1].className === 'correct') {
  var accuracy = typos / 30;
  window.alert('You missed ' + accuracy + ' % of typing.');
}
