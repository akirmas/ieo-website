import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Image from '../../shared/Image';

import './OfferCard.scss';

const OfferCard = ({ banner, title, text, find }) => (
  <div className="offer-card">
    <main className="offer-card__main">
      <h4 className="offer-card__title">{title}</h4>
      <p className="offer-card__text">{text}</p>
      <Link className="offer-card__link" to="">{find}</Link>
    </main>
    <aside className="offer-card__aside">
      <Image className="offer-card__banner" src={banner} alt={title} />
    </aside>
  </div>
);

OfferCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  find: PropTypes.string.isRequired,
  banner: PropTypes.string.isRequired,
};

export default OfferCard;