import React from 'react';
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

const Header = () => (
  <header className="header header--theme-dark">
    <main className="header__main">
      <Nav links={links} />
      <Link to="/">
        <Image className="logo" src="images/logo/ieo.png" alt="ieo website logo" />
      </Link>
    </main>
  </header>
);

export default Header;