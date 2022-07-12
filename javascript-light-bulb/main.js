var $background = document.querySelector('.backgroud-on');
var $circle = document.querySelector('.circle-on');
var on = true;
$circle.addEventListener('click', onOff);

function onOff(event) {
  if (on) {
    $background.className = 'backgroud-off';
    $circle.className = 'circle-off';
    on = false;
  } else {
    $background.className = 'backgroud-on';
    $circle.className = 'circle-on';
    on = true;
  }
}
