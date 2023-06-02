// var React = require('react') ; // no need to use this format, babel will automatically convert to lower format;
//babel is a javascript compiler
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  
  </>
);