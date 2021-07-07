import React from 'react';
import PropTypes from 'prop-types';
import './SpeakerCardStyle.css';

const TopSpeakerCard = ({ image, title, description, urls }) => (
  <div className="Card">
    <div className="upper-container">
      <div className="image-container">
        <img src={image} alt="speakerIMG" />
      </div>
    </div>
    <div className="lower-container">
      <h3>{title}</h3>
      <h4>{description}</h4>
      {urls.fb && (
        <a href={urls.fb} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook fa-2x" />
        </a>
      )}
      {urls.instagram && (
        <a href={urls.instagram} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram fa-2x" />
        </a>
      )}
      {urls.twitter && (
        <a href={urls.twitter} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter fa-2x" />
        </a>
      )}
      {urls.linkedIn && (
        <a href={urls.linkedIn} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin fa-2x" />
        </a>
      )}
      {urls.web && (
        <a href={urls.web} target="_blank" rel="noopener noreferrer">
          <i className="fas fa-globe fa-2x" style={{ color: 'black' }} />
        </a>
      )}
    </div>
  </div>
);

TopSpeakerCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  urls: PropTypes.object.isRequired,
};

export default TopSpeakerCard;
