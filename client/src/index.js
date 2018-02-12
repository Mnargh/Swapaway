//main controller,  everything
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import MainNavbar from './components/navbar/MainNavbar';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <MainNavbar />
      <App />
    </div>
  </BrowserRouter>,
   document.getElementById('root'));
registerServiceWorker();
