import React from 'react';
import ReactDOM from 'react-dom/client';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function ListItem(props) {
  return <li>{props.value}</li>;
}

function RenderPokemon(props) {
  const names = props.array;
  const listItems = names.map(name =>
    <ListItem key={name.name.toString()} value={name.name} />
  );

  return (
    <ul>{listItems}</ul>
  );
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<RenderPokemon array={pokedex} />);
