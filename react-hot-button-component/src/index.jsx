import React from 'react';
import ReactDOM from 'react-dom/client';
import HotBtn from './hot-button';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<HotBtn />);
