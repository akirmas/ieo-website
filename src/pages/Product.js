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
    [name]: { article, title }
  } = pages;

  return (
    <>
      {
        <Article
          banner={article.banner}
          content={article.content}
          variant={article.variant}
          contact={article.contact}
          title={title}
          thin="true"
        />
      }
    </>
  );
};

Product.propTypes = {
  match: PropTypes.object
};

export default Product;
