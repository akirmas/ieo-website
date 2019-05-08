import React from 'react';
import PropTypes from 'prop-types';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '../../shared/Button';

import useToggle from '../../../hooks/useToggle';
import { classnames } from '../../../helpers';

import './MobileMenu.scss';

const MobileMenu = ({ children }) => {
  const { value: isVisible, toggle } = useToggle(false);

  return (
    <>
      <Button 
        className="mobile-menu-switch"
        onClick={toggle}  
      >
        <FontAwesomeIcon 
          icon={isVisible ? faTimes : faBars} 
          size="lg"  
        />
      </Button>
      <section 
        className={classnames(
          'mobile-menu',
          `mobile-menu--is-${isVisible ? 'visible' : 'hidden'}`
        )}
      >
        {children}
      </section>
    </>
  );
};

MobileMenu.propTypes = {
  children: PropTypes.any,
};

export default MobileMenu;