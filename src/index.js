import React from 'react';
import ReactDOM from 'react-dom';
import MenuItem from './menu-page/MenuItem';
import pizza from './pizza.jpg';

const prop = {
  title: "Pizza",
  desc: "This is the description of a pizza",
  imgsrc: {pizza},
  imgalt: "Image of a pizza"
};


ReactDOM.render(
  <React.StrictMode>
    <MenuItem {...prop}/>
  </React.StrictMode>,
  document.getElementById('root')
);
