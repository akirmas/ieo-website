import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { AppContext } from '../../../context/app';

import './NavSub.scss';

const NavSub = ({ location: { pathname } }) => {
  const { template: {
    navigation: {
      sub
    }
  } } = useContext(AppContext);

  const links = Object
    .values(sub)
    .filter(array => array.find(object => object['to'] === pathname))[0];

  const activeLinkIndex = links.findIndex(link => link['to'] === pathname);

  const prev = activeLinkIndex > 0 ? links[activeLinkIndex - 1] : null;
  const current = links[activeLinkIndex];
  const next = activeLinkIndex < links.length - 1 ? links[activeLinkIndex + 1] : null;

  return (
    <nav className="nav-sub">
      <div className="container container--normal">
        <main className="nav-sub__main">
          {next ? (
            <>
              <Link className="nav-sub__chevron nav-sub__chevron--right" to={next.to}>
                <FontAwesomeIcon icon={faChevronRight} />
              </Link>
              <Link className="nav-sub__link nav-sub__link--roily" to={next.to}>{next.name}</Link>
            </>
          ) : <div className="stub" />}
          <Link className={`nav-sub__link nav-sub__link--active nav-sub__link--${current.variant}`} to={current.to}>{current.name}</Link>
          {prev ? (
            <>
              <Link className="nav-sub__link nav-sub__link--roily" to={prev.to}>{prev.name}</Link>
              <Link className="nav-sub__chevron nav-sub__chevron--left" to={prev.to}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </Link>
            </>
          ) : <div className="stub" />}
        </main>
      </div>
    </nav>
  );
};

NavSub.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(NavSub);