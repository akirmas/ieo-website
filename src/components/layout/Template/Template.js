import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

import { AppContext } from '../../../context/app';

import './Template.scss';

const Template = ({ children, location }) => {
  const variant = location.pathname === '/' ? 'gray' : 'light';

  const { template: {
    footer
  } } = useContext(AppContext);

  return (
    <>
      <Header {...{variant}} />
      {children}
      <Footer {...{variant}} {...footer} />
    </>
  );
};

Template.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object,
};

export default withRouter(Template);