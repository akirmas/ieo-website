import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Image from '../../shared/Image';

import { classnames } from '../../../helpers';

import './ImageSlider.scss';

const ImageSlider = ({ images, slideshow = true, delay = 5000 }) => {
  const [ activeImage, setActiveImage ] = useState(images[0]);
  
  const isActive = (image) => Object.is(image, activeImage);

  const nextSlide = (images) => {
    const findActiveId = images.findIndex(isActive);      
    const nextActive = (findActiveId === images.length - 1 ) ? 0 : findActiveId + 1;

    setActiveImage(images[nextActive]);
  };

  useEffect(() => {
    if (slideshow) {
      const interval = setInterval(() => {
        nextSlide(images);
      }, delay);

      return () => clearInterval(interval);
    }
  }, [images, activeImage]);

  const renderControl = (image) => {
    const onActiveImageChange = () => setActiveImage(image);

    return (
      <div 
        key={image.src}
        className={classnames(
          'image-slider__control', 
          isActive(image) ? 'image-slider__control--is-active' : '')}
        onClick={onActiveImageChange} 
      />
    );
  };

  const renderImages = (image) => {
    return (
      <Image 
        key={image.src}
        className={classnames(
          'image-slider__image',
          'image-slider__image--is-'.concat(isActive(image) ? 'active' : 'hidden'))}
        {...image}
      />
    );
  };

  return (
    <div className="image-slider">
      <figure className="image-slider__preview">
        {images.map(renderImages)}
      </figure>
      <div className="image-slider__controls">
        {images.map(renderControl)}
      </div>
    </div>
  );
};

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
  slideshow: PropTypes.bool,
  delay: PropTypes.number,
};

export default ImageSlider;