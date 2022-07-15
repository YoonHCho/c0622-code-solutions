var books = [
  {
    isbn: '84247-49387594',
    title: 'Hello JavaScript',
    author: 'Goodbye JavaScript'
  },
  {
    isbn: '069483-23847694',
    title: 'First Book',
    author: 'First Author'
  },
  {
    isbn: '340971-39876458943',
    title: 'Second Book',
    author: 'Second Author'
  }
];

console.log('books: ', books);
console.log('typeof books: ', typeof books);

var jsonString = JSON.stringify(books);
console.log('jsonString: ', jsonString);
console.log('typeof jsonString: ', typeof jsonString);

var thirdString = JSON.stringify({ 714: 'Yoon' });
console.log('thirdString: ', thirdString);
console.log('typeof thirdString: ', typeof thirdString);

var parseString = JSON.parse(thirdString);
console.log('parseString: ', parseString);
console.log('typeof parseString: ', typeof parseString);
