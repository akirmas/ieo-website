import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './Nav.scss';

const Nav = ({ links }) => {
  const renderNavLink = (link) => (
    <NavLink 
      className="nav__link" 
      activeClassName="nav__link--active" 
      key={link.name} 
      to={link.to}
      strict
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
    })
  ).isRequired,
};

export default Nav;