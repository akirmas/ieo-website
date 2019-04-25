import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Image from '../../shared/Image';

import { classnames } from '../../../helpers';

import './ImageSlider.scss';

const ImageSlider = ({ images }) => {
  const [ activeImage, setActiveImage ] = useState(images[images.length - 1]);

  const renderControl = (image) => {
    const onActiveImageChange = () => {
      setActiveImage(image);
    };

    const isActive = Object.is(image, activeImage);

    return (
      <div 
        key={image.src}
        className={classnames(
          'image-slider__control', 
          isActive ? 'image-slider__control--active' : '')}
        onClick={onActiveImageChange} 
      />
    );
  };

  /**
   * TODO: make an animated transition between images
   */
  const renderImages = (image) => {
    const isActive = Object.is(image, activeImage);

    return (
      <Image 
        key={image.src}
        className={classnames(
          'image-slider__image',
          isActive ? 'image-slider__image--active' : '')}
        {...image}
      />
    );
  };

  return (
    <div className="image-slider">
      <figure className="image-slider__preview">
        <Image 
          className="image-slider__image image-slider__image--active"
          {...activeImage}
        />
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
};

export default ImageSlider;