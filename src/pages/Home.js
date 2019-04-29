import React, { useContext } from 'react';

import ImageSlider from '../components/widgets/ImageSlider';
import WhoWeAre from '../components/sections/WhoWeAre';
import UsefulProducts from '../components/sections/UsefulProducts';
import ExpertiseAreas from '../components/sections/ExpertiseAreas';

import { AppContext } from '../context/app';


const Home = () => {
  const { pages: { 
    home: {
      mainSlider,
      whoWeAre,
      usefulProducts,
      expertiseAreas,
    }
  } } = useContext(AppContext);

  return (
    <>
      <ImageSlider images={mainSlider} />
      <WhoWeAre {...whoWeAre} />
      <UsefulProducts {...usefulProducts} />
      <ExpertiseAreas {...expertiseAreas} />
    </>
  );
};

export default Home;