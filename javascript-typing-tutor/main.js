var char = document.querySelectorAll('span');
var index = 0;
window.addEventListener('keydown', checkKey);

function checkKey(event) {
  if (char[index].textContent === event.key) {
    char[index].className = 'correct';
    index++;
    char[index].className = 'current';
  } else {
    char[index].className = 'incorrect';
  }
}
