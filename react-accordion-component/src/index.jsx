import React from 'react';
import ReactDOM from 'react-dom/client';
import Accordion from './accordion';

const webDev = [
  {
    id: 1,
    topic: 'Hypertext Markup Language',
    detail: 'Hypertext Markup Language (HTML) is the standard markup language for creating web papges and web applications. With Cascading Style Sheets (CSS) and JavaDcript, it forms a triad of cornerstone technologies for the World Wide Web.'
  },
  {
    id: 2,
    topic: 'Cascading Sytle Sheets',
    detail: 'Cascading Style Sheets (CSS) is a style sheet language used for dexcribing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web. alongside HTML and JavaScript.'
  },
  {
    id: 3,
    topic: 'JavaScript',
    detail: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation and first-class functions.'
  }
];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Accordion array={webDev}/>);
