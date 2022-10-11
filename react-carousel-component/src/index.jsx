import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const images = [
  '../images/001.png',
  '../images/004.png',
  '../images/007.png',
  '../images/025.png',
  '../images/039.png'
];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Carousel image={images} />);
