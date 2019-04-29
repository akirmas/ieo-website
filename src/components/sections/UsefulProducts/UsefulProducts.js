import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from '../../blocks/ProductCard';

import './UsefulProducts.scss';

const UsefulProducts = ({ title, cards }) => {
  const renderProductCard = (card) => (
    <ProductCard key={card.title} {...{card}} />
  );

  return (
    <section className="useful-products">
      <div className="container container--normal">
        <header className="useful-products__header">
          <h3 className="useful-products__title">{title}</h3>
        </header>
        <main className="useful-products__main">
          {cards.map(renderProductCard)}
        </main>
      </div>
    </section>
  );
};

UsefulProducts.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default UsefulProducts;