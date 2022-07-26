/* exported Student */

function Student(firstName, lastName, subject) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.subject = subject;
}

// when creating a function with prototype contructor.prototype.namedFunction = function () {}
Student.prototype.getFullName = function () {
  return this.firstName + ' ' + this.lastName;
};

Student.prototype.getIntroduction = function () {
  return 'Hello, my name is ' + this.getFullName() + ' and I am studying ' + this.subject + '.';
};
