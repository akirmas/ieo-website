import React from "react";
import PropTypes from "prop-types";

import Image from "../../shared/Image";

const Slide = ({ avatar, name, status, slideClassName, setSlide, i }) => {
  const changeSlide = () => setSlide(i);

  return (
    <div className={slideClassName} onClick={changeSlide}>
      <div className="testimonials__user-avatar">
        <Image src={avatar} alt={name} className="testimonials__avatar" />
      </div>
      <div className="testimonials__user-info">
        <h4 className="testimonials__user-info-author">{name}</h4>
        <span className="testimonials__user-info-status"> {status}</span>
      </div>
    </div>
  );
};

Slide.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  slideClassName: PropTypes.string.isRequired,
  setSlide: PropTypes.func.isRequired,
  i: PropTypes.number.isRequired
};

export default Slide;
