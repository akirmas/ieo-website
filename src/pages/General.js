import React, { useContext, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../context/app";

import NavSub from "../components/layout/NavSub";
import Article from "../components/sections/Article";
import Showcase from "../components/sections/Showcase";

import NotFound from "../pages/NotFound";

const General = ({
  match: {
    params: { name }
  }
}) => {
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

  const { pages } = useContext(AppContext);

  if (!pages[name]) {
    return <NotFound />;
  }

  const {
    [name]: { article, showcase }
  } = pages;

  return (
    <div
      onTouchStart={e => setTouchStart(e.changedTouches[0].clientX)}
      onTouchEnd={e => setDifference(touchStart - e.changedTouches[0].clientX)}
    >
      <NavSub {...{ nextRef, prevRef }} />
      <Article {...article} />
      <Showcase {...showcase} />
    </div>
  );
};

General.propTypes = {
  match: PropTypes.object
};

export default General;
