import React, { useContext } from 'react';

import ImageSlider from '../components/widgets/ImageSlider';
import WhoWeAre from '../components/sections/WhoWeAre';

import { AppContext } from '../context/app';


const Home = () => {
  const { pages: { 
    home: {
      mainSlider,
      whoWeAre,
    }
  } } = useContext(AppContext);

  return (
    <>
      <ImageSlider images={mainSlider} />
      <WhoWeAre {...whoWeAre} />
    </>
  );
};

export default Home;