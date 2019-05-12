import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import App from './App';
import { AppProvider } from './context/app';
import ScrollToTop from './components/services/ScrollToTop';
import ErrorBoundary from './components/services/ErrorBoundary';

import * as serviceWorker from './serviceWorker';

import { resolvePath } from './helpers';

import './styles/main.scss';

library.add(
  faChevronRight,
  faChevronLeft,
);

const Index = ({ data }) => (
  <ErrorBoundary>
    <AppProvider value={data}>
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
          <App />
        </ScrollToTop>
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
