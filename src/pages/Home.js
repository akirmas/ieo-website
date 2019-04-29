import React, { useContext } from 'react';

import ImageSlider from '../components/widgets/ImageSlider';
import WhoWeAre from '../components/sections/WhoWeAre';
import UsefulProducts from '../components/sections/UsefulProducts';

import { AppContext } from '../context/app';


const Home = () => {
  const { pages: { 
    home: {
      mainSlider,
      whoWeAre,
      usefulProducts,
    }
  } } = useContext(AppContext);

  return (
    <>
      <ImageSlider images={mainSlider} />
      <WhoWeAre {...whoWeAre} />
      <UsefulProducts {...usefulProducts} />
    </>
  );
};

export default Home;