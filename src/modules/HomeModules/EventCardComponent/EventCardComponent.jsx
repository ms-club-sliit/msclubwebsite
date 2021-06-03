import React from 'react';
import PropTypes from 'prop-types';
import './EventCardStyle.css';

const EventCardComponent = ({ image, title, time }) => (
  <div className="event-card card mb-3 mt-3">
    <div className="past-event-img">
      <img className="past-event-img" src={image} alt="Card cap" />
    </div>
    <div className="day-container">
      <h3 className="day">27</h3>
      <p className="month">Nov</p>
      <div className="time-container">
        <h5 className="time">{time}</h5>
      </div>
    </div>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit Morbi elementum at egestas rutrum commodo.
      </p>
    </div>
  </div>
);

EventCardComponent.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default EventCardComponent;
