import React from 'react';
import PropTypes from 'prop-types';

import Image from '../../shared/Image';

import './ExpertiseCard.scss';

const ExpertiseCard = ({ card }) => (
  <div className="expertise-card">
    <main className={`expertise-card__main expertise-card__main--theme-${card.variant}`}>
      <h4 className="expertise-card__title">{card.title}</h4>
      <figure className="expertise-card__picture">
        <Image className="expertise-card__image" src={card.image} alt={card.title} />
      </figure>
    </main>
    <footer className="expertise-card__footer">
      <p className="expertise-card__text">{card.text}</p>
    </footer>
  </div>
);

ExpertiseCard.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    variant: PropTypes.string,
  })
};

export default ExpertiseCard;