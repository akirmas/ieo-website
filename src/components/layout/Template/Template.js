import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Header from '../Header';

import './Template.scss';

const Template = ({ children, location }) => {
  const variant = location.pathname === '/' ? 'gray' : 'light';

  return (
    <>
      <Header {...{variant}} />
      {children}
    </>
  );
};

Template.propTypes = {
  children: PropTypes.any,
  location: PropTypes.object,
};

export default withRouter(Template);