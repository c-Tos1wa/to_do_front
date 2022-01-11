import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <Header />
        <App /> 
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


