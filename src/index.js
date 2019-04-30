import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';

import App from './App';
import { AppProvider } from './context/app';
import ErrorBoundary from './components/services/ErrorBoundary';

import * as serviceWorker from './serviceWorker';

import { resolvePath } from './helpers';

import './styles/main.scss';

const Index = ({ data }) => (
  <ErrorBoundary>
    <AppProvider value={data}>
      <Router basename={window.location.search}>
        <App />
      </Router>
    </AppProvider>
  </ErrorBoundary>
);

Index.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};

const RootElement = document.getElementById('root');

const setup = (file) => {
  fetch(resolvePath(file))
    .then(response => response.json())
    .then(data => {
      render(
        <Index {...{data}} />,
        RootElement 
      );
    })
    // eslint-disable-next-line no-console
    .catch(console.error);
};

setup('data.json');

serviceWorker.unregister();
