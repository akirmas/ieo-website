import { useState, useEffect } from "react";

const useSlider = (slides, delay = 5000, doSlide = true, startSlide = 0) => {
  const [currentSlide, setCurrentSlide] = useState(startSlide);
  const [goRight, setGoRight] = useState(true);
  const length = slides.length;

  useEffect(() => {
    if (doSlide) {
      const interval = setInterval(() => {
        if (goRight) {
          currentSlide < length - 1 && setCurrentSlide(currentSlide + 1);
          currentSlide === length - 1 && setGoRight(!goRight);
        } else {
          currentSlide && setCurrentSlide(currentSlide - 1);
          currentSlide === 0 && setGoRight(!goRight);
        }
      }, delay);

      return () => clearInterval(interval);
    }
  }, [currentSlide, length, delay, doSlide, goRight]);

  const nextSlide = () =>
    currentSlide < length - 1 && setCurrentSlide(currentSlide + 1);

  const prevSlide = () => currentSlide && setCurrentSlide(currentSlide - 1);

  const setSlide = id => setCurrentSlide(id);

  return {
    currentSlide,
    nextSlide,
    prevSlide,
    setSlide,
    sliderLength: length
  };
};

export default useSlider;
