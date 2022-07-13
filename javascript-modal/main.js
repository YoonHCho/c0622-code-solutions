var modalBtn = document.querySelector('.modal-btn');
var noBtn = document.querySelector('.no-btn');
var popUp = document.querySelector('div');

modalBtn.addEventListener('click', showPopUp);
noBtn.addEventListener('click', hidePopUp);

function showPopUp(event) {
  popUp.classList.remove('hidden');
}

function hidePopUp(event) {
  popUp.classList.add('hidden');
}
