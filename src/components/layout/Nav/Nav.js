import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './Nav.scss';

import { classnames } from '../../../helpers';

const Nav = ({ links }) => {
  const isActive = (to) => (_, { pathname }) => {
    const category = pathname.replace(/^\//, '').split('/')[0];

    return to.startsWith(`/${category}`);
  }; 

  const renderNavLink = (link) => (
    <NavLink 
      className="nav__link" 
      activeClassName={classnames(
        'nav__link--active',
        link.variant ? `nav__link--${link.variant}` : ''
      )} 
      key={link.name} 
      to={link.to}
      isActive={isActive(link.to)}
    >
      {link.name}
    </NavLink>
  );

  return (
    <nav className="nav">
      {links && links.map(renderNavLink)}
    </nav>
  );
};

Nav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
      variant: PropTypes.string,
    })
  ).isRequired,
};

export default Nav;