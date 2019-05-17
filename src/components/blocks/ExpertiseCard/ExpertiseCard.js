import React from 'react';
import PropTypes from 'prop-types';

import Image from '../../shared/Image';

import './ExpertiseCard.scss';

const ExpertiseCard = ({ card }) => (
  <div className="expertise-card">
    <main className="expertise-card__main">
      <h4 className="expertise-card__title">{card.title}</h4>
      <figure className="expertise-card__picture">
        <Image className="expertise-card__image" src={card.image} alt={card.title} />
      </figure>
    </main>
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