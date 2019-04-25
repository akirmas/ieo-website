import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ children, ...restProps }) => (
  <button {...restProps}>
    {children}
  </button>
);

Button.defaultProps = {
  type: 'button',
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf([ 'button', 'reset', 'submit' ]),
  children: PropTypes.any,
};

export default Button;