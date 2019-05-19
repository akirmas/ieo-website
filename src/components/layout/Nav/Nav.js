import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { classnames } from '../../../helpers';

import './Nav.scss';

const Nav = ({ links, ...restProps }) => {
  const isActive = (to) => (_, { pathname }) => {
    if (pathname === '/') return false;

    const category = pathname.replace(/^\//, '').split('/')[0];

    return to.startsWith(`/${category}`);
  }; 

  const renderNavLink = (link) => (
    <div
      className="nav__item"
      key={link.name}
    >
      <NavLink 
        className="nav__link" 
        activeClassName={classnames(
          'nav__link--active',
          link.variant ? `nav__link--${link.variant}` : ''
        )}  
        to={link.to}
        isActive={isActive(link.to)}
      >
        {link.name}
      </NavLink>
    </div>
  );

  return (
    <nav 
      className="nav" 
      {...restProps}
    >
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