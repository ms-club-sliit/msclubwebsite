import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import EventCardComponent from '../../HomeModules/EventCardComponent/EventCardComponent';
import events from './PastEventData.json';
import './PastEventStyles.css';

const responsive = {
  0: {
    items: 1,
  },
  600: {
    items: 2,
  },
  1000: {
    items: 3,
  },
};
let slider;
const slideNext = () => {
  slider.next(500);
};
const slidePrev = () => {
  slider.prev(500);
};
const slidePrevKeyBoard = (e) => {
  if (e.keyCode === 37) {
    slidePrev();
  }
};
const slideNextKeyBoard = (e) => {
  if (e.keyCode === 39) {
    slideNext();
  }
};

const PastEvents = () => (
  <div className="past-event-container">
    <h2>Past Events</h2>
    <div className="nav-button-wrapper">
      <div className="view-more">View More</div>
      <div className="owl-button-prev" onClick={slidePrev} onKeyDown={slidePrevKeyBoard} role="button" tabIndex={0}>
        <i className="far fa-arrow-alt-circle-left" />
      </div>
      <div className="owl-button-next" onClick={slideNext} onKeyDown={slideNextKeyBoard} role="button" tabIndex={0}>
        <i className="far fa-arrow-alt-circle-right" />
      </div>
    </div>

    <div className="container-fluid">
      <OwlCarousel
        className="owl-theme"
        dots={false}
        loop
        margin={70}
        responsive={responsive}
        ref={(slide) => {
          slider = slide;
        }}
      >
        {events.data.map((event) => (
          <EventCardComponent
            key={event.id}
            image={event.image}
            title={event.title}
            time={event.time}
            month={event.month}
            date={event.date}
          />
        ))}
      </OwlCarousel>
    </div>
  </div>
);

export default PastEvents;
