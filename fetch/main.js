
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log('1st data:', data))
  .then(fetch('https://pokeapi.co/api/v2/pokemon/7')
    .then(response => response.json())
    .then(data => console.log('2nd data', data)));
// fetch('https://pokeapi.co/api/v2/pokemon/7')
//   .then(response => response.json())
//   .then(data => console.log('2nd data', data));
