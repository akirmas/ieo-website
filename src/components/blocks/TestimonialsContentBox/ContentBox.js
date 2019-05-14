import React from 'react';
import PropTypes from 'prop-types';

import Image from '../../shared/Image';

import { renderText } from '../../../helpers';

const ContentBox = ({ text, title, afterwords }) => {
  return (
    <div className="testimonials__content-box">
      <Image 
        className="testimonials__content-box-icon" 
        src="images/testimonials/icon.png" 
      />
      <h3 className="testimonials__content-box-title">{title}</h3>
      <p className="testimonials__content-box-text">{renderText(text)}</p>
      <p className="testimonials__content-box-afterwords">{afterwords}</p>
    </div>
  );
};

ContentBox.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  afterwords: PropTypes.string.isRequired,
};

export default ContentBox;
