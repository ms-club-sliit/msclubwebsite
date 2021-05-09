import React from 'react';
import './UpcomingEventComponent.css';
import UpcomingBanner from '../../../assets/event/UpcomingBanner.svg';

const UpcomingEventComponent = () => (
  <section className="UpcomingEventComponent container mt-5">
    <h2 className="text-left">
      <strong>Upcoming Event</strong>
    </h2>
    <div>
      <div className="card mt-5 mb-5 UpcomingEventComponentCard">
        <div className="row ">
          <div className="col-lg-5 col-md-12 col-sm-12">
            <img alt="imageFlatVector" className="img-fluid UpcomingEventComponentImg" src={UpcomingBanner} />
          </div>

          <div className="col-lg-7 col-md-12 col-sm-12 p-3">
            <h2>
              <strong>Lorem ipsum</strong>
            </h2>
            <p className="lead mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi elementum at egestas rutrum commodo
              ultrices vitae vel.Velit a scelerisque et pharetra, tincidunt pulvinar amet. Tristique morbi enim urna
              viverra massa vehicula quam Velit a scelerisque et pharetra, tincidunt pulvinar amet. Tristique morbi enim
              urna viverra massa vehicula quam.
            </p>
            <button type="button" className="event-upcoming-btn mt-4">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default UpcomingEventComponent;
