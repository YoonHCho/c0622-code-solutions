import React from 'react';
import * as ReactDOM from 'react-dom';

const $h1 = React.createElement('h1', null, 'Hello, React!');

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render($h1);

console.log(React.createElement('h1', null, 'Hello, React!'));
