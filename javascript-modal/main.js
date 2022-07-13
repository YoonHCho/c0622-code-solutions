var modalBtn = document.querySelector('.modal');
var noBtn = document.querySelector('.no-btn');
var popUp = document.querySelector('.pop-up');

/* console.log(modalBtn);
console.log(noBtn);
console.log(popUp); */

modalBtn.addEventListener('click', showPopUp);
noBtn.addEventListener('click', hidePopUp);

function showPopUp(event) {
/*   console.log('test');
  background.className = 'background-on'; */
}

function hidePopUp() {
  popUp.className = 'pop-up-hide fixed';
  /* background.className = ''; */
}
