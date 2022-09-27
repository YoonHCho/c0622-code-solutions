/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  // redo
  const top = stack.pop();
  if (typeof top === 'undefined') {
    return;
  }
  const next = stack.peek();
  stack.push(top);
  return next;
}
