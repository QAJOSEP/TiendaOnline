import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import 'font-awesome/css/font-awesome.css';

import { BrowserRouter } from 'react-router-dom';

//import { Provider } from "react-redux";
//import store from './redux/store';
//<Provider store={store}>
  // meter en App
//</Provider>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>  
    <App />    
  </BrowserRouter>
);
