import React from 'react';

import ImageSlider from '../components/widgets/ImageSlider';

const images = [
  {
    src: 'images/main slider/first.png'
  }, {
    src: 'images/main slider/second.jpg'
  }, {
    src: 'images/main slider/third.jpg'
  },      
];

const Home = () => (
  <>
    <ImageSlider {...{images}} />
  </>
);

export default Home;