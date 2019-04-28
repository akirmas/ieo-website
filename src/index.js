import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import ErrorBoundary from './components/services/ErrorBoundary';

import * as serviceWorker from './serviceWorker';

import './styles/main.scss';

const Index = () => (
  <ErrorBoundary>
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
  </ErrorBoundary>
);

const RootElement = document.getElementById('root');

render(
  <Index />,
  RootElement 
);

serviceWorker.unregister();
