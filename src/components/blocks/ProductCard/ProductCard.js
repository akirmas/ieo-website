import React from 'react';
import PropTypes from 'prop-types';

import Image from '../../shared/Image';

import './ProductCard.scss';

const ProductCard = ({ card }) => (
  <div className="product-card">
    <h4 className="product-card__title">{card.title}</h4>
    <Image className="product-card__image" src={card.image} alt={card.title} />
    <p className="product-card__text">{card.text}</p>
  </div>
);

ProductCard.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })
};

export default ProductCard;