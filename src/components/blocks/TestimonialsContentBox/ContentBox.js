import React from 'react';
import PropTypes from 'prop-types';

const ContentBox = ({ text, title, afterwords }) => {
  return (
    <div className="testimonials__content-box">
      <h3 className="testimonials__content-box-title">{title}</h3>
      <p className="testimonials__content-box-story">{text}</p>
      <span className="testimonials__content-box-afterwords">{afterwords}</span>
    </div>
  );
};

ContentBox.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  afterwords: PropTypes.string.isRequired,
};

export default ContentBox;
