/* exported takeSmaller */

function takeSmaller(queue) {
  const first = queue.dequeue();

  while (queue.peek() !== undefined) {
    const second = queue.peek();
    if (queue.peek() !== undefined) {
      if (first < second) {
        queue.dequeue();
        queue.enqueue(second);
        return first;
      } else if (first === second) {
        queue.dequeue();
        queue.enqueue(second);
        return first;
      } else if (first > second) {
        queue.dequeue();
        queue.enqueue(first);
        return second;
      }
    }
  }
  return first;
}
