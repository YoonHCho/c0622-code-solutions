/* exported student */

var student = {
  firstName: 'Yoon',
  lastName: 'Cho',
  subject: 'JavaScript',
  getFullName: function (firstName, lastName) {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction: function () {
    return 'Hello, my name is ' + this.firstName + ' ' + this.lastName + ' and I am studying ' + this.subject + '.';
  }
};
