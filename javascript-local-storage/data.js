/* exported todos */

var todos = [];

var previousTodosJSON = localStorage.getItem('javascript-local-storage');
if (previousTodosJSON !== null) {
  todos = JSON.parse(previousTodosJSON);
}

window.addEventListener('beforeunload', before);

function before(event) {
  var todoJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todoJSON);
}
