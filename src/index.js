import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import config from './config';

import App from './App.jsx';
import './css/App.css';

const elem = document.querySelector('.root');

console.log(config);

const wrapApp = AppComponent => (
  <Router>
    <AppComponent />
  </Router>
);

ReactDOM.render(wrapApp(App), elem);
