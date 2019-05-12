import React from 'react';
import PropTypes from 'prop-types';

import NavBottom from '../NavBottom';
import SocialMedia from '../../widgets/SocialMedia';

import './Footer.scss';

const Footer = ({ variant = 'light', navigation, contacts, copyright }) => (
  <footer className={`footer footer--theme-${variant}`}>
    <div className="container container--normal">
      <main className="footer__main">
        <NavBottom config={navigation.sub} />
        {variant === 'light' && (
          <SocialMedia {...{contacts}} />
        )}
        <p className="copyright">{copyright}</p>
      </main>
    </div>
  </footer>
);

export default Footer;

Footer.propTypes = {
  variant: PropTypes.oneOf([
    'gray', 'light'
  ]),
  navigation: PropTypes.object.isRequired,
  contacts: PropTypes.array,
  copyright: PropTypes.string.isRequired,
};