var $message = document.querySelector('.message');
setTimeout(greeting, 2000);

function greeting() {
  $message.textContent = 'Hello There';
}
