import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './NavBottom.scss';

const NavBottom = ({ config }) => {
  const renderNavGroup = ([ title, links ]) => (
    <div key={title} className="nav-bottom__group">
      <h5 className="nav-bottom__group-title">{title}</h5>
      {links.map(renderLink)}
    </div>
  );

  const renderLink = (link) => (
    <Link key={link.name} className="nav-bottom__link" to={link.to}>{link.name}</Link>
  );

  return (
    <nav className="nav-bottom">
      {Object.entries(config).map(renderNavGroup)}
    </nav>
  );
};

NavBottom.propTypes = {
  config: PropTypes.object.isRequired,
};

export default NavBottom;