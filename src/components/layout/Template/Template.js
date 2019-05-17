import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';

import { AppContext } from '../../../context/app';

const Template = ({ children }) => {
  const { template: {
    header,
    footer,
    navigation,
  } } = useContext(AppContext);

  return (
    <>
      <Header {...header} {...{navigation}} />
      <main className="main">
        {children}
      </main>
      <Footer {...footer} {...{navigation}} />
    </>
  );
};

Template.propTypes = {
  children: PropTypes.any,
};

export default Template;