/* exported takeTop */

function takeTop(stack) {
  let result;
  if (stack.peek() !== undefined) {
    result = stack.peek();
    stack.pop();
  }
  return result;
}
