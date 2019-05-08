import React, { useContext } from 'react';

import ImageSlider from '../components/widgets/ImageSlider';
import WhoWeAre from '../components/sections/WhoWeAre';
import UsefulProducts from '../components/sections/UsefulProducts';
import ExpertiseAreas from '../components/sections/ExpertiseAreas';
import JobOffer from '../components/sections/JobOffer';
import Testimonials from '../components/sections/Testimonials';

import { AppContext } from '../context/app';

const Home = () => {
  const { pages: { 
    home: {
      mainSlider,
      whoWeAre,
      usefulProducts,
      expertiseAreas,
      testimonials,
      jobOffer,
    }
  } } = useContext(AppContext);

  return (
    <>
      <ImageSlider images={mainSlider} />
      <WhoWeAre {...whoWeAre} />
      <UsefulProducts {...usefulProducts} />
      <ExpertiseAreas {...expertiseAreas} />
      <Testimonials {...testimonials} />
      <JobOffer {...jobOffer} />
    </>
  );
};

export default Home;