import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../context/app';

import Article from '../components/sections/Article';
import Showcase from '../components/sections/Showcase';

const General = ({ match: { params: { name } } }) => {
  const { pages: { 
    [name]: {
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

General.propTypes = {
  match: PropTypes.object,
};

export default General;