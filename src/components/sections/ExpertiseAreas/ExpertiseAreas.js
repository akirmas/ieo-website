import React from 'react';
import PropTypes from 'prop-types';

import ExpertiseCard from '../../blocks/ExpertiseCard';

import './ExpertiseAreas.scss';

const ExpertiseAreas = ({ title, cards }) => {
  const renderExpertiseCard = (card) => (
    <ExpertiseCard key={card.title} {...{card}} />
  );

  return (
    <section className="expertise-areas">
      <div className="container container--normal">
        <header className="expertise-areas__header">
          <h3 className="expertise-areas__title">{title}</h3>
        </header>
        <main className="expertise-areas__main">
          {cards.map(renderExpertiseCard)}
        </main>
      </div>
    </section>
  );
};

ExpertiseAreas.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ExpertiseAreas;