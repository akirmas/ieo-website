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
    ? text.map(sentence => <Fragment key={sentence}>{sentence} <br /></Fragment>)
    : text;