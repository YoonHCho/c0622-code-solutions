/* exported take2nd */

function take2nd(queue) {
  const first = queue.dequeue();
  if (typeof first === 'undefined') {
    return first;
  }
  if (typeof queue.peek() === 'undefined') {
    return first;
  } else {
    const second = queue.dequeue();
    queue.dequeue();
    queue.enqueue(first);
    return second;
  }
}
