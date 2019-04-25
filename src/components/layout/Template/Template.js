import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';

import './Template.scss';

const Template = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

Template.propTypes = {
  children: PropTypes.any,
};

export default Template;