var imageURL = [
  'images/001.png',
  'images/004.png',
  'images/007.png',
  'images/025.png',
  'images/039.png'
];

var $thruImages = document.querySelector('.thru-images');
var $circle = document.querySelectorAll('.circle');
var currentIndex = 0;

var intervalTimer = setInterval(thruImages, 3000);
var $rightArrow = document.querySelector('.right-arrow');
$rightArrow.addEventListener('click', thruImages);

function thruImages(event) {
  if (event) {
    clearInterval(intervalTimer);
    intervalTimer = setInterval(thruImages, 3000);
  }
  currentIndex++;
  if (currentIndex < 5) {
    $thruImages.setAttribute('src', imageURL[currentIndex]);
    $circle[currentIndex - 1].classList.replace('fa-solid', 'fa-regular');
    $circle[currentIndex].classList.replace('fa-regular', 'fa-solid');
  } else {
    $circle[currentIndex - 1].classList.replace('fa-solid', 'fa-regular');
    currentIndex = 0;
    $circle[currentIndex].classList.replace('fa-regular', 'fa-solid');
    $thruImages.setAttribute('src', imageURL[currentIndex]);
  }
}

var $leftArraow = document.querySelector('.left-arrow');
$leftArraow.addEventListener('click', oneBefore);
function oneBefore(event) {
  clearInterval(intervalTimer);
  intervalTimer = setInterval(thruImages, 3000);
  currentIndex--;
  if (currentIndex < 0) {
    $circle[currentIndex + 1].classList.replace('fa-solid', 'fa-regular');
    currentIndex = imageURL.length - 1;
    $thruImages.setAttribute('src', imageURL[currentIndex]);
    $circle[currentIndex].classList.replace('fa-regular', 'fa-solid');
  } else {
    $circle[currentIndex + 1].classList.replace('fa-solid', 'fa-regular');
    $thruImages.setAttribute('src', imageURL[currentIndex]);
    $circle[currentIndex].classList.replace('fa-regular', 'fa-solid');
  }
}

var $circleList = document.querySelector('.circle-list');
$circleList.addEventListener('click', whichCircImg);
function whichCircImg(event) {
  clearInterval(intervalTimer);
  intervalTimer = setInterval(thruImages, 3000);
  $circle[currentIndex].classList.replace('fa-solid', 'fa-regular');
  currentIndex = event.target.getAttribute('data-id');
  $circle[currentIndex].classList.replace('fa-regular', 'fa-solid');
  $thruImages.setAttribute('src', imageURL[currentIndex]);
}
