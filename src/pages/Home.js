import React, { useContext } from "react";

import ImageSlider from "../components/widgets/ImageSlider";
import Banner from "../components/sections/Banner";
import WhoWeAre from "../components/sections/WhoWeAre";
import UsefulProducts from "../components/sections/UsefulProducts";
import ExpertiseAreas from "../components/sections/ExpertiseAreas";
import Testimonials from "../components/sections/Testimonials";

import { AppContext } from "../context/app";

const Home = () => {
  const {
    pages: {
      home: {
        mainSlider,
        whoWeAre,
        usefulProducts,
        expertiseAreas,
        testimonials
      }
    }
  } = useContext(AppContext);

  return (
    <>
      {/* <ImageSlider images={mainSlider} /> */}
      <Banner />
      <WhoWeAre {...whoWeAre} />
      <UsefulProducts {...usefulProducts} />
      <ExpertiseAreas {...expertiseAreas} />
      <Testimonials {...testimonials} />
    </>
  );
};

export default Home;
