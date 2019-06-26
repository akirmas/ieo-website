import React, { useContext, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";

import { AppContext } from "../../../context/app";

import "./NavSub.scss";

const NavSub = ({ location: { pathname } }) => {
  const [touchStart, setTouchStart] = useState(null);
  const [difference, setDifference] = useState(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  useEffect(() => {
    if (difference && nextRef.current && difference > 50) {
      nextRef.current.click();
    } else if (difference && prevRef.current && difference < -50) {
      prevRef.current.click();
    }
  }, [difference]);

  const {
    template: {
      navigation: { sub }
    }
  } = useContext(AppContext);

  const links = Object.values(sub)
    .filter(array => array.find(object => object["to"] === pathname))[0]
    .slice()
    .reverse();

  const activeLinkIndex = links.findIndex(link => link["to"] === pathname);

  const prev = activeLinkIndex > 0 ? links[activeLinkIndex - 1] : null;
  const beforePrev = activeLinkIndex > 1 ? links[activeLinkIndex - 2] : null;
  const current = links[activeLinkIndex];
  const next =
    activeLinkIndex < links.length - 1 ? links[activeLinkIndex + 1] : null;
  const afterNext =
    activeLinkIndex < links.length ? links[activeLinkIndex] : null;

  return (
    <nav
      className="nav-sub"
      onTouchStart={e => setTouchStart(e.changedTouches[0].clientX)}
      onTouchEnd={e => setDifference(touchStart - e.changedTouches[0].clientX)}
    >
      <div className="container container--normal">
        <main className="nav-sub__main">
          {afterNext ? (
            <>
              {next && (
                <Link
                  className="nav-sub__chevron nav-sub__chevron--right"
                  to={next.to}
                >
                  <span ref={nextRef}>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </span>
                </Link>
              )}

              <Link
                className={`nav-sub__link nav-sub__link--active nav-sub__link--${
                  current.variant
                }`}
                to={current.to}
              >
                {current.name}
              </Link>
            </>
          ) : (
            <div className="stub" />
          )}
          {prev ? (
            <>
              <Link className="nav-sub__link nav-sub__link--roily" to={prev.to}>
                {prev.name}
              </Link>
              {beforePrev && (
                <Link
                  className="nav-sub__link nav-sub__link--roily"
                  to={prev.to}
                >
                  {prev.name}
                </Link>
              )}
              <Link
                className="nav-sub__chevron nav-sub__chevron--left"
                to={prev.to}
              >
                <span ref={prevRef}>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </span>
              </Link>
            </>
          ) : (
            <div className="stub" />
          )}
        </main>
      </div>
    </nav>
  );
};

NavSub.propTypes = {
  location: PropTypes.object.isRequired
};

export default withRouter(NavSub);
