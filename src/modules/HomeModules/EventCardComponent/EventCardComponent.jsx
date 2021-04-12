import React from 'react';
import PropTypes from 'prop-types';
import './EventCardStyle.css';

const EventCardComponent = ({ image, title, time }) => (
  <div className="card" style={{ width: '30rem' }}>
    <img className="card-img-top shadow-sm bg-white" src={image} alt="Card cap" />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{time}</p>
    </div>
  </div>
);

EventCardComponent.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default EventCardComponent;
