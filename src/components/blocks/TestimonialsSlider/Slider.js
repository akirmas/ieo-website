import React from "react";
import PropTypes from "prop-types";

import Slide from "./Slide";

const Slider = ({ items, currentSlide, setSlide, sliderLength }) => {
  const slideClassName = i =>
    `testimonials__slide ${
      currentSlide === i ? "testimonials__slide--is-active" : ""
    }`;

  const removeHoleCurrent =
    currentSlide === sliderLength - 1
      ? sliderLength - 2
      : currentSlide === 0
      ? 1
      : currentSlide;

  return (
    <div className="testimonials__slider-container">
      <div
        className={"testimonials__slider"}
        style={{
          transform: `translateX(calc(${(100 / 3) * (removeHoleCurrent - 1)}%))`
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
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentSlide: PropTypes.number.isRequired,
  setSlide: PropTypes.func.isRequired
};

export default Slider;
