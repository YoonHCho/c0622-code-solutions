function ExampleConstructor() {

}

console.log('value of ExampleConstructor.prototype: ', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype: ', typeof ExampleConstructor.prototype);

var aFunction = new ExampleConstructor();
console.log('value of aFunction: ', aFunction);
var isInstanceOf = aFunction instanceof ExampleConstructor;
console.log('value of isInstanceOf: ', isInstanceOf);
