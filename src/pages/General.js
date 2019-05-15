import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../context/app';

import NavSub from '../components/layout/NavSub';
import Article from '../components/sections/Article';
import Showcase from '../components/sections/Showcase';

import NotFound from '../pages/NotFound';

const General = ({ match: { params: { name } } }) => {
  const { pages } = useContext(AppContext);

  if ( ! pages[name]) {
    return <NotFound />;
  }

  const { [name]: {
    article,
    showcase
  } } = pages;

  return (
    <>
      <NavSub />
      <Article {...article} />
      <Showcase {...showcase} />
    </>
  );
};

General.propTypes = {
  match: PropTypes.object,
};

export default General;