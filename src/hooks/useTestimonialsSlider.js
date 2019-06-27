import { useState, useEffect } from "react";

const useSlider = (slides, delay = 5000, doSlide = true, startSlide = 0) => {
  const [currentSlide, setCurrentSlide] = useState(startSlide);
  const [goRight, setGoRight] = useState(true);
  const [letGo, setLetGo] = useState(true);
  const length = slides.length;

  useEffect(() => {
    if (doSlide && letGo) {
      const interval = setInterval(() => {
        if (goRight) {
          currentSlide < length - 1 && setCurrentSlide(currentSlide + 1);
          if (currentSlide === length - 1) {
            setGoRight(!goRight);
            setCurrentSlide(length - 2);
          }
        } else {
          currentSlide && setCurrentSlide(currentSlide - 1);
          if (currentSlide === 0) {
            setGoRight(!goRight);
            setCurrentSlide(1);
          }
        }
      }, delay);

      return () => clearInterval(interval);
    }
  }, [currentSlide, length, delay, doSlide, goRight, letGo]);

  const nextSlide = () =>
    currentSlide < length - 1 && setCurrentSlide(currentSlide + 1);

  const prevSlide = () => currentSlide && setCurrentSlide(currentSlide - 1);

  const setSlide = id => setCurrentSlide(id);

  const toggleLetGo = () => setLetGo(!letGo);

  return {
    currentSlide,
    nextSlide,
    prevSlide,
    setSlide,
    sliderLength: length,
    letGo,
    toggleLetGo
  };
};

export default useSlider;
