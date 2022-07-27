var $countDown = document.querySelector('.countdown-display');
var counter = parseInt($countDown.textContent);
var intervalID = setInterval(countDown, 1000);

function countDown() {
  if (counter === 1) {
    $countDown.textContent = '~Earth Beeeelooowww Us~';
    return clearInterval(intervalID);
  }
  counter--;
  $countDown.textContent = counter;
}
