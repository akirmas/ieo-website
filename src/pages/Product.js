import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../context/app";

import Article from "../components/sections/Article";

import NotFound from "../pages/NotFound";

const Product = ({
  match: {
    params: { name }
  }
}) => {
  const { pages } = useContext(AppContext);

  if (!pages[name]) {
    return <NotFound />;
  }

  const {
    [name]: { article, showcase }
  } = pages;
  console.log(name);
  console.log(article);
  return <>{/* <Article {...{ article }} /> */}</>;
};

Product.propTypes = {
  match: PropTypes.object
};

export default Product;
