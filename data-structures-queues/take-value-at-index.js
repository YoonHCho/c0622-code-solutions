/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  let counter = 0;
  if (queue.peek() === undefined) return;
  while (counter <= index) {
    if (counter === index) {
      const atIndex = queue.dequeue();
      return atIndex;
    }
    counter++;
    const first = queue.dequeue();
    queue.enqueue(first);
  }
}
