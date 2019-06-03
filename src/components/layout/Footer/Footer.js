import React from "react";
import PropTypes from "prop-types";

import NavBottom from "../NavBottom";
import SocialMedia from "../../widgets/SocialMedia";

import "./Footer.scss";

const Footer = ({ navigation, contacts }) => (
  <footer className="footer">
    <div className="container container--wide">
      <main className="footer__main">
        <NavBottom config={navigation.sub} />
        <SocialMedia {...{ contacts }} />
      </main>
    </div>
  </footer>
);

export default Footer;

Footer.propTypes = {
  navigation: PropTypes.object.isRequired,
  contacts: PropTypes.array.isRequired
};
