import React from 'react';
import PropTypes from 'prop-types';

import Image from '../../shared/Image';

import './Teammate.scss';

const Teammate = ({ photo, position, name, info }) => (
  <div className="teammate">
    <Image className="teammate__photo" src={photo} alt={name} />
    <p className="teammate__position">{position}</p>
    <p className="teammate__text teammate__name">{name}</p>
    <p className="teammate__text teammate__info">{info}</p>
  </div>
);

Teammate.propTypes = {
  photo: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

export default Teammate;