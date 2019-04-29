import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Image from '../../shared/Image';
import Nav from '../Nav';

import './Header.scss';

const links = [
  {
    name: 'אודות',
    to: ''
  }, {
    name: 'תחומי פעילות',
    to: ''
  }, {
    name: 'פתרונות',
    to: ''
  }, {
    name: 'מוצרים',
    to: ''
  },
];

const Header = ({ variant = 'light' }) => (
  <header className={`header header--theme-${variant}`}>
    <div className="container container--wide">
      <main className="header__main">
        <Nav links={links} />
        <Link to="/">
          <Image className="logo" src="images/logo/ieo.png" alt="ieo website logo" />
        </Link>
      </main>
    </div>
  </header>
);

Header.propTypes = {
  variant: PropTypes.oneOf([
    'gray', 'light'
  ]),
};

export default Header;