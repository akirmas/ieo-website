import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Image from '../../shared/Image';

import { renderContent, classnames } from '../../../helpers';

import './Article.scss';

const Article = ({ variant, banner, content, contact }) => (
  <section className="article">
    <div className="container container--normal">
      <main className="article__main">
        <Image className="article__banner" {...banner} />
        {renderContent(content, 'article', variant)}
        {contact && (
          <Link 
            className={classnames(
              'article__contact-link',
              variant ? `article__contact-link--theme-${variant}` : ''
            )}
            to="/contact-us"
          >
            ליצירת קשר  
          </Link>
        )}
      </main>
    </div>
  </section>
);

Article.propTypes = {
  variant: PropTypes.string,
  banner: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
  }).isRequired,
  content: PropTypes.array.isRequired,
  contact: PropTypes.bool.isRequired,
};

export default Article;