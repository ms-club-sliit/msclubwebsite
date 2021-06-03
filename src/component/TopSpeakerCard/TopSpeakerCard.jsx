import React from 'react';
import PropTypes from 'prop-types';
import './SpeakerCardStyle.css';

const TopSpeakerCard = ({ image, title }) => (
  <div className="speaker-card card mb-2 mt-2">
    <img className="past-speaker-img" src={image} alt="Card cap" />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
    </div>
  </div>
);

TopSpeakerCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TopSpeakerCard;
