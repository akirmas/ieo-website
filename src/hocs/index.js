/* eslint-disable react/display-name */
import React from 'react';

export const withProps = (WrappedComponent) => (props) => (
  <WrappedComponent {...props} />
);