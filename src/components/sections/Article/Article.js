import React from "react";
import PropTypes from "prop-types";

import ContactUs from "../../../pages/ContactUs";

import Image from "../../shared/Image";

import { renderContent } from "../../../helpers";

import "./Article.scss";

const Article = ({
  variant,
  banner,
  content,
  contact,
  title,
  thin = false,
  align,
  children
}) => (
  <section className={`article ${thin && "article--gup"}`}>
    <div
      className={`container ${
        thin
          ? `container__product container__product--theme-${variant}`
          : "container--normal"
      }`}
    >
      <main className="article__main">
        {title && (
          <h2
            className={`article__page-title article__page-title--theme-${variant}`}
          >
            {title}
          </h2>
        )}
        <Image className="article__banner" {...banner} />
        {align
          ? renderContent(content, "article", variant, "justify")
          : renderContent(content, "article", variant)}
        {contact && (
          <div className="article__contact">
            <ContactUs />
          </div>
        )}
        {children}
      </main>
    </div>
  </section>
);

Article.propTypes = {
  variant: PropTypes.string,
  banner: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string
  }).isRequired,
  content: PropTypes.array.isRequired,
  contact: PropTypes.bool.isRequired
};

export default Article;
