var char = document.querySelectorAll('span');
var index = 0;
document.addEventListener('keydown', checkKey);

function checkKey(event) {
  if (index < 30) {
    if (char[index].textContent === event.key) {
      char[index].className = 'correct';
      index++;
      if (index < 30) {
        char[index].className = 'current';
      }
    } else {
      char[index].className = 'incorrect';
    }
  }
}
