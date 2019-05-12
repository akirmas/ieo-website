import React from 'react';
import PropTypes from 'prop-types';

import Image from '../../shared/Image';

import './SocialMedia.scss';

const SocialMedia = ({ contacts, justify = 'flex-start' }) => {
  const renderSocialMediaLink = (contact) => (
    <a 
      key={contact.type} 
      className="social-media__link"
      href={contact.link} 
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image 
        className="social-media__icon" 
        src={contact.icon} 
        alt={contact.type} 
      />
    </a>
  ); 

  return (
    <div 
      className="social-media"
      style={{
        justifyContent: justify
      }}  
    >
      {contacts.map(renderSocialMediaLink)}
    </div>
  );
};

SocialMedia.propTypes = {
  contacts: PropTypes.array.isRequired,
  justify: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
  ]),
};

export default SocialMedia;