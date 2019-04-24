import React from 'react';
import { render } from 'react-dom';

import App from './App';

import * as serviceWorker from './serviceWorker';

import './styles/main.scss';

const Index = () => (
  <App />
);

const RootElement = document.getElementById('root');

render(
  <Index />,
  RootElement 
);

serviceWorker.unregister();
