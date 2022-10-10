/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let first = queue.peek();
  while (queue.peek() !== undefined) {
    first = queue.dequeue();
    if (first <= queue.peek()) {
      return first;
    } else if (first > queue.peek()) {
      queue.enqueue(first);
    }
  }
  return first;
}
