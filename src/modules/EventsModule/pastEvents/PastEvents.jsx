import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import EventCardComponent from '../../HomeModules/EventCardComponent/EventCardComponent';
import events from './PastEventData.json';

const responsive = {
  0: {
    items: 1,
  },
  450: {
    items: 2,
  },
  600: {
    items: 3,
  },
  1000: {
    items: 4,
  },
};

const PastEvents = () => (
  <div>
    <div>
      <div className="container-fluid">
        <OwlCarousel items={4} className="owl-theme" loop nav margin={20} responsive={responsive}>
          {events.data.map((event) => (
            <EventCardComponent key={event.id} image={event.image} title={event.title} time={event.time} />
          ))}
        </OwlCarousel>
      </div>
    </div>
  </div>
);

export default PastEvents;
