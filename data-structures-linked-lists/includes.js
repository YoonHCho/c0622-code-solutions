/* exported includes */

function includes(list, value) {
  let counter = 0;
  while (list) {
    if (list.data === value) {
      counter++;
    }
    list = list.next;
  }

  if (counter > 0) {
    return true;
  } else {
    return false;
  }
}
