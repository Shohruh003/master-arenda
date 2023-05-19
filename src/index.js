import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { HomeProvider } from './context/homeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <HomeProvider>
      <App />
    </HomeProvider>
  </Router>
);
