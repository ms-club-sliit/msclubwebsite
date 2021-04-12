import React from 'react';
import './HomeHeroSection.css';
import HeroHeaderImage from '../../../assets/home/header-image.svg';

const HomeHeroSection = () => (
  <div className="home-overlay">
    <div className="home-hero-section-bg" />
    <div className="row">
      <div className="col-md-6">
        <p className="home-header-title">
          <b>MS CLUB OF SLIIT</b>
        </p>
        <div>
          <p className="home-header-content">
            A student-driven community based on Sri Lanka Institute of Information Technology aiming to bridge the skill
            gap between an Undergraduate and an Industry Professional.
          </p>
        </div>
        <button type="button" className="home-header-btn">
          Join Now
        </button>
      </div>
      <div className="col-md-6">
        <img src={HeroHeaderImage} alt="home header img" className="home-header-img" />
      </div>
    </div>
  </div>
);

export default HomeHeroSection;
