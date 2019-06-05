import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import "./WhoWeAre.scss";

const WhoWeAre = ({ title, text }) => (
  <section className="who-we-are">
    <main className="who-we-are__main">
      <h2 className="who-we-are__title">{title}</h2>
      <p className="who-we-are__text">
        {text}{" "}
        <Link to="./about/who-we-are">
          <span className="who-we-are__link">להמשך קריאה</span>
          <span className="who-we-are__link">...</span>
        </Link>
      </p>
    </main>
  </section>
);

WhoWeAre.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default WhoWeAre;
