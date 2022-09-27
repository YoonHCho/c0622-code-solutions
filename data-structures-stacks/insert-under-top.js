/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  // redo
  const top = stack.pop();
  if (typeof top === 'undefined') {
    return;
  }
  stack.push(value);
  stack.push(top);

}
