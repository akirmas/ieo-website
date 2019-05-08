import React, { Fragment } from 'react';

export const resolvePath = (
  filePath, 
  prefix = process.env.PUBLIC_URL.concat('/')
) =>
  filePath.startsWith('http')
    ? filePath
    : prefix.concat(filePath);

export const classnames = (...classList) => 
  classList
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();

export const renderText = (text) =>
  Array.isArray(text)
    ? text.map((sentence, index) => (
      <Fragment 
        key={sentence}
      >
        {sentence} 
        {index < text.length - 1  && <br />}
      </Fragment>
    ))
    : text;

export const renderContent = (content, blockName, variant) => 
  content.map(contentGroup => {
    return Object.entries(contentGroup).map(([ key, value ]) => {
      switch (key) {
      case 'title': 
        return (
          <h3
            key={value}
            className={classnames(
              `${blockName}__title`,
              variant ? `${blockName}__text--theme-${variant}` : ''
            )}
          >
            {value}
          </h3>
        );
      case 'text': 
        return (
          <div 
            className={`${blockName}__text-group`}
          >
            {Array.isArray(value)
              ? value.map(text => (
                <p 
                  key={text}              
                  className={`${blockName}__text`}
                >
                  {renderText(text)}
                </p>
              ))
              : renderText(value)}
          </div>
        );
      default: 
        return '';
      }
    });
  });