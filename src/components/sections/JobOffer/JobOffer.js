import React from 'react';
import PropTypes from 'prop-types';

import SocialMedia from '../../widgets/SocialMedia';
import OfferCard from '../../blocks/OfferCard';

import './JobOffer.scss';

const JobOffer = ({ card, contacts }) => (
  <section className="job-offer">
    <div className="container container--normal">
      <main className="job-offer__main">
        <OfferCard {...card} />
        <SocialMedia {...{contacts}} />
      </main>
    </div>
  </section>
);

JobOffer.propTypes = {
  card: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    find: PropTypes.string.isRequired,
    banner: PropTypes.string.isRequired,
  }).isRequired,
  contacts: PropTypes.object.isRequired,
};

export default JobOffer;