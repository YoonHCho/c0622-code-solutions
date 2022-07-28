var $ulEl = document.querySelector('#user-list');
var $xhr = new XMLHttpRequest();

$xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
$xhr.responseType = 'json';
$xhr.addEventListener('load', function () {
  console.log('value of $xhr.status: ', $xhr.status);
  console.log('value of $xhr.response: ', $xhr.response);
  for (var i = 0; i < $xhr.response.length; i++) {
    var $liEl = document.createElement('li');
    $liEl.textContent = $xhr.response[i].name;
    $ulEl.appendChild($liEl);
  }
});
$xhr.send();
