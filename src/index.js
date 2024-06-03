import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';



import '../node_modules/primereact/resources/themes/lara-dark-blue/theme.css';
import "../node_modules/primereact/resources/primereact.min.css";
import '../node_modules/primeicons/primeicons.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);