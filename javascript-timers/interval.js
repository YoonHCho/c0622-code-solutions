window.addEventListener('DOMContentLoaded', startCount);

var $countDown = document.querySelector('.countdown-display');
var counter = parseInt($countDown.textContent);
var intervalId;

function startCount() {
  if (!intervalId) {
    intervalId = setInterval(countDown, 1000);
  }
}

function countDown() {
  if (counter === 1) {
    $countDown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalId);
    intervalId = null;
  } else {
    counter--;
    $countDown.textContent = counter;
  }
}
