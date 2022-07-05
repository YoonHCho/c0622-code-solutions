var student = {
  firstName: 'Yoon',
  lastName: 'Cho',
  age: 37
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Accounting Clerk';

console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log('value of student.previousOccupation: ', student.previousOccupation);
console.log('value of student: ', student);

var vehicle = {
  make: 'Honda',
  model: 'Civic',
  year: '2010'
};

vehicle['color'] = 'Grey';
vehicle['isConvertible'] = false;

console.log('value of vehicle[\'color\']: ', vehicle['color']);
console.log('value of vehicle[\'isConvertible\']: ', vehicle['isConvertible']);
console.log(vehicle);

var pet = {
  name: 'Tofu',
  type: 'Korean Jindo'
};

delete pet.name;
delete pet['type'];
console.log('value of pet: ', pet);
