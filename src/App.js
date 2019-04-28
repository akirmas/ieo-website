import React from 'react';

import Template from './components/layout/Template';
import ImageSlider from './components/widgets/ImageSlider';

const images = [
  {
    src: 'images/main slider/first.png'
  }, {
    src: 'images/main slider/second.jpg'
  }, {
    src: 'images/main slider/third.jpg'
  },      
];

const App = () => (
  <main className="app">
    <Template>
      <ImageSlider {...{images}} />
    </Template>
  </main>
);

export default App;
