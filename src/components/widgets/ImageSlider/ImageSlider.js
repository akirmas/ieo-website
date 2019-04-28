import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Image from '../../shared/Image';

import { classnames } from '../../../helpers';

import './ImageSlider.scss';

/**
 * TODO: make the slider adaptive for different devices
 */
const ImageSlider = ({ images }) => {
  const [ activeImage, setActiveImage ] = useState(images[0]);

  const isActive = (image) => Object.is(image, activeImage);

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
};

export default ImageSlider;