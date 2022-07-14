var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', checking);

function checking(e) {
  console.log('event.target: ', e.target);
  console.log('event.target.tagName: ', e.target.tagName);
  /* also can use e.target.nodeName in place of e.target.tagName */
  if (e.target && e.target.tagName === 'BUTTON') {
    var $closestAncestor = e.target.closest('.task-list-item');
    console.log('closest .task-list-item: ', $closestAncestor);
    $closestAncestor.remove();
  }
}
