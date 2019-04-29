import React from 'react';
import PropTypes from 'prop-types';

import './WhoWeAre.scss';

const WhoWeAre = ({ title, text }) => (
  <section className="who-we-are">
    <main className="who-we-are__main">
      <h2 className="who-we-are__title">{title}</h2>
      <p className="who-we-are__text">{text}</p>
    </main>
  </section>
);

WhoWeAre.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default WhoWeAre;