import React from 'react';

import Template from './components/layout/Template';
import RouterOutlet from './components/services/RouterOutlet';

import routes from './routes';

const App = () => (
  <main className="app">
    <Template>
      <RouterOutlet {...{routes}} />
    </Template>
  </main>
);

export default App;
