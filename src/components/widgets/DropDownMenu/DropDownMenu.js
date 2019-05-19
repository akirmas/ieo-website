import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { SlideDown } from 'react-slidedown';

import Image from '../../shared/Image';

import 'react-slidedown/lib/slidedown.css';
import './DropDownMenu.scss';

const DropDownMenu = ({ config, isOpen, onMouseLeave }) => {
  const renderNavGroup = ([title, links]) => (
    <div 
      key={title} className="drop-down-menu__group"
      onClick={onMouseLeave}  
    >
      {links.map(renderLink)}
    </div>
  );

  const renderLink = link => (
    <Link key={link.name} className="drop-down-menu__link" to={link.to}>
      {link.name}
    </Link>
  );

  return (
    <div 
      className="drop-down-menu"
      onMouseLeave={onMouseLeave}  
    >
      <div className="container container--wide">
        <SlideDown>
          {isOpen && (
            <main className="drop-down-menu__main">
              <nav className="drop-down-menu__nav">
                {Object.entries(config).map(renderNavGroup)}
              </nav>
              <Image
                className="drop-down-menu__image"
                src="images/drop-down-menu.png"
              />
            </main>
          )}
        </SlideDown>
      </div>
    </div>
  );
};

DropDownMenu.propTypes = {
  config: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default DropDownMenu;