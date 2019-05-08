import React, { useContext } from 'react';
import { AppContext } from '../context/app';

import Article from '../components/sections/Article';
import Showcase from '../components/sections/Showcase';

const Business = () => {
  const { pages: { 
    business: {
      article,
      showcase
    }
  } } = useContext(AppContext);

  return (
    <>
      <Article {...article} />
      <Showcase {...showcase} />
    </>
  );
};

export default Business;