function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

var seconds = convertMinutesToSeconds(5);
console.log('value of seconds: ', seconds);

function greet(name) {
  return 'Hey, ' + name;
}

var greeting = greet('Beavis');
console.log('value of greeting: ', greeting);

function getArea(width, height) {
  return width * height;
}

var area = getArea(17, 42);
console.log('value of area: ', area);

function getFirstName(person) {
  return person.firstName;
}

var firstName = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('value of firstName: ', firstName);

function getLastElement(array) {
  return array[array.length - 1];
}

var lastElement = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('value of lastElement:', lastElement);
