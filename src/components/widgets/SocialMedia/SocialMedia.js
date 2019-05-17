import React from 'react';
import PropTypes from 'prop-types';

import Image from '../../shared/Image';

import './SocialMedia.scss';

const SocialMedia = ({ contacts }) => {
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
    <div className="social-media">
      {contacts.map(renderSocialMediaLink)}
    </div>
  );
};

SocialMedia.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default SocialMedia;