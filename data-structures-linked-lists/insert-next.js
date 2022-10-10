/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const afterHead = new LinkedList(value);
  afterHead.next = list.next;
  list.next = afterHead;
  return list;
}
