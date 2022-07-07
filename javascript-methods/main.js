var x = 7;
var y = 14;
var z = 46;
var maximumValue = Math.max(x, y, z);
console.log('value of maximumValue: ', maximumValue);

var heroes = ['superman', 'batman', 'goku', 'hero'];
var randomNumber = (Math.random() * heroes.length);
var randomIndex = Math.floor(randomNumber);
var randomHero = heroes[randomIndex];
console.log('value of randomIndex: ', randomIndex);
console.log('value of randomHero: ', randomHero);

var library = [
  {
    title: 'Tuesdays with Morrie',
    author: 'Mitch Albom'
  },
  {
    title: 'The Good Earth',
    author: 'Pearl S. Buck'
  },
  {
    title: 'The Name of the Wind',
    author: 'Patrick Rothfuss'
  }
];
var lastBook = library.pop();
console.log('value of lastBook: ', lastBook);
var firstBook = library.shift();
console.log('value of firstBook: ', firstBook);
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library: ', library);

var fullName = 'Yoon Cho';
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('value of sayMyName', sayMyName);
