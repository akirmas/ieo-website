import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Image from '../../shared/Image';
import Nav from '../Nav';
import NavMobile from '../NavMobile';
import MobileMenu from '../../widgets/MobileMenu';

import './Header.scss';

const Header = ({ logo, navigation }) => (
  <header className="header">
    <div className="container container--wide">
      <main className="header__main">
        <MobileMenu>
          <NavMobile config={navigation.sub} />
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
  logo: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
  }).isRequired,
  navigation: PropTypes.object.isRequired,
};

export default Header;