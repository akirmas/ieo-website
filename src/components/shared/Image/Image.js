import React from 'react';
import PropTypes from 'prop-types';

import { resolvePath } from '../../../helpers';

import './Image.scss';

const Image = ({ src, ...restProps }) => (
  <img src={resolvePath(src)} {...restProps} />
);

Image.defaultProps = {
  alt: '',
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;