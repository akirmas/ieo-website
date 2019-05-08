import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './NavMobile.scss';

const NavMobile = ({ config }) => {
  const renderNavGroup = ([ title, links ]) => (
    <div key={title} className="nav-mobile__group">
      <h5 className="nav-mobile__group-title">{title}</h5>
      {links.map(renderLink)}
    </div>
  );

  const renderLink = (link) => (
    <Link key={link.name} className="nav-mobile__link" to={link.to}>{link.name}</Link>
  );

  return (
    <nav className="nav-mobile">
      {Object.entries(config).map(renderNavGroup)}
    </nav>
  );
};

NavMobile.propTypes = {
  config: PropTypes.object.isRequired,
};

export default NavMobile;