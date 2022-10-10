/* exported updateNext */

function updateNext(list, value) {
  if (list.next === null) return;
  if (list.next !== null) {
    list.next.data = value;
  }
}
