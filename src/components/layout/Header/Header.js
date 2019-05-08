import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Image from '../../shared/Image';
import Nav from '../Nav';
import NavMobile from '../NavMobile';
import MobileMenu from '../../widgets/MobileMenu';

import './Header.scss';

const Header = ({ variant = 'light', logo, navigation }) => (
  <header className={`header header--theme-${variant}`}>
    <div className="container container--wide">
      <main className="header__main">
        <MobileMenu>
          <NavMobile config={navigation.mobile} />
        </MobileMenu>
        <Nav links={navigation.main} />
        <Link to="/">
          <Image className="logo" {...logo} />
        </Link>
      </main>
    </div>
  </header>
);

Header.propTypes = {
  variant: PropTypes.oneOf([
    'gray', 'light'
  ]),
  logo: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
  }).isRequired,
  navigation: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Header;