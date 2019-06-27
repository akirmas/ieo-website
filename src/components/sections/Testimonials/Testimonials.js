import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import Slider from "../../blocks/TestimonialsSlider/Slider";
import ContentBox from "../../blocks/TestimonialsContentBox/ContentBox";
import useTestimonialsSlider from "../../../hooks/useTestimonialsSlider";

import "./Testimonials.scss";

const Testimonials = ({ title, items }) => {
  const {
    currentSlide,
    nextSlide,
    prevSlide,
    setSlide,
    sliderLength,
    letGo,
    toggleLetGo
  } = useTestimonialsSlider(items);

  const ButtonControl = ({ go, faShape }) => (
    <button className="testimonials__arrow-btn" onClick={go}>
      <FontAwesomeIcon className="testimonials__arrow-svg" icon={faShape} />
    </button>
  );

  return (
    <section className="testimonials">
      <div className="container container--wide">
        <header className="testimonials__header">
          <h3 className="testimonials__title">{title}</h3>
        </header>
        <main
          className="testimonials__main"
          onClick={() => toggleLetGo(!letGo)}
        >
          <div className="testimonials__slider-area">
            <div className="testimonials__button-container">
              <ButtonControl faShape={faAngleRight} go={prevSlide} />
            </div>
            <Slider
              {...{ items, currentSlide, setSlide, sliderLength, letGo }}
            />
            <div className="testimonials__button-container">
              <ButtonControl faShape={faAngleLeft} go={nextSlide} />
            </div>
          </div>
          <div>
            <ContentBox {...items[currentSlide].comment} />
          </div>
        </main>
      </div>
    </section>
  );
};

Testimonials.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Testimonials;
