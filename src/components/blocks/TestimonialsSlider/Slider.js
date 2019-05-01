import React from 'react';
import PropTypes from 'prop-types';

import Slide from './Slide';

const Slider = ({ items, currentSlide, setSlide }) => {
  const slideClassName = i =>
    `testimonials__slide ${
      currentSlide === i ? 'testimonials__slide--is-active' : ''
    }`;

  return (
    <div className="testimonials__slider-container">
      <div
        className={'testimonials__slider'}
        style={{
          transform: `translateX(calc(${(100 / 3) * currentSlide - 100 / 3}%))`
        }}
      >
        {items.map(({ avatar, name, status }, i) => {
          return (
            <Slide
              slideClassName={slideClassName(i)}
              key={i}
              {...{ avatar, name, status, i, setSlide }}
            />
          );
        })}
      </div>
    </div>
  );
};

Slider.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
  currentSlide: PropTypes.number.isRequired,
  setSlide: PropTypes.func.isRequired,
};

export default Slider;
