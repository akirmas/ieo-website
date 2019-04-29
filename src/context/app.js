import React, { createContext } from 'react';
import PropTypes from 'prop-types';

const AppContext = createContext();

const AppProvider = ({ value, children }) => (
  <AppContext.Provider 
    {...{value}}
  >
    {children}
  </AppContext.Provider>
);

AppProvider.propTypes = {
  value: PropTypes.any.isRequired,
  children: PropTypes.any,
};

export {
  AppContext,
  AppProvider,
};