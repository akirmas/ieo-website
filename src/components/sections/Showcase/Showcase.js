import React from 'react';
import PropTypes from 'prop-types'; 

import Image from '../../shared/Image';

import './Showcase.scss';

const Showcase = ({ images }) => {
  const renderImage = (image) => (
    <Image
      key={image.src}
      className="showcase__image"
      {...image}
    />
  );

  return (
    <section className="showcase">
      <div className="container container--normal">
        <figure className="showcase__image-list">
          {images && images.map(renderImage)}
        </figure>
      </div>
    </section>
  );
};

Showcase.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired
};

export default Showcase;