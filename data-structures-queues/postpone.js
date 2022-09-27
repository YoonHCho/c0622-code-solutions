/* exported postpone */

function postpone(queue) {
  if (typeof queue.peek() !== 'undefined') {
    const postpone = queue.dequeue();
    queue.enqueue(postpone);
  }
}
