import React from 'react';
import './EventHeroSection.css';
import EventHeroHeaderImage from '../../../assets/flat-illustrations/undraw_events_2p66 1.png';
import Navbar from '../../../component/common/navbar/Navbar';

const EventHeroSection = () => (
  <div className="container-fluid">
    <div className="eventSectionGb" />
    <Navbar />
    <div className="row">
      <div className="col-sm-12 col-md-6 col-lg-6 text-div">
        <div className="col-12">
          <p className="exploreText">Explore </p>
          <p className="exploreText">events</p>
        </div>
        <div className="col-12">
          <input type="text" className="form-control searchBox" />
          <button type="button" className="btn searchButton">
            <i className="fa fa-search" />
          </button>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-item-center">
        <img src={EventHeroHeaderImage} alt="Event header img" className="event-header-img" />
      </div>
    </div>
  </div>
);

export default EventHeroSection;
