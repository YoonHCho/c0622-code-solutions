var counter = 0;

var $hotBtn = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

$hotBtn.addEventListener('click', clickNum);
function clickNum(event) {
  counter++;
  $clickCount.textContent = 'Clicks: ' + counter;

  if (counter < 4) {
    $hotBtn.className = 'hot-button cold';
  } else if (counter < 7) {
    $hotBtn.className = 'hot-button cool';
  } else if (counter < 10) {
    $hotBtn.className = 'hot-button tepid';
  } else if (counter < 13) {
    $hotBtn.className = 'hot-button warm';
  } else if (counter < 16) {
    $hotBtn.className = 'hot-button hot';
  } else {
    $hotBtn.className = 'hot-button nuclear';
  }
}
