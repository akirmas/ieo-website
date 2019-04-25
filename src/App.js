import React from 'react';

import Template from './components/layout/Template';
import ImageSlider from './components/widgets/ImageSlider';

const images = [
  {
    src: 'images/banners/third.png'
  },   {
    src: 'images/banners/second.png'
  },   {
    src: 'images/banners/first.png'
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
