import React from 'react';
import PropTypes from 'prop-types';

import Image from '../../shared/Image';
import Button from '../../shared/Button';

import { renderContent, classnames } from '../../../helpers';

import './Article.scss';

const Article = ({ variant, banner, content, contact }) => (
  <section className="article">
    <div className="container container--normal">
      <main className="article__main">
        <Image className="article__banner" {...banner} />
        {renderContent(content, 'article', variant)}
        {contact && (
          <Button 
            className={classnames(
              'article__contact-button',
              variant ? `article__contact-button--theme-${variant}` : ''
            )}
          >
            ליצירת קשר  
          </Button>
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