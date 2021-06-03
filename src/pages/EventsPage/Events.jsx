import React from 'react';
import PastEvents from '../../modules/EventsModule/pastEvents/PastEvents';
import UpcomingEventComponent from '../../modules/EventsModule/UpcomingEventComponent/UpcomingEventComponent';
import Footer from '../../component/common/footer/Footer';
import FutureEvents from '../../modules/EventsModule/futureEvents/FutureEvents';
import TopSpeakers from '../../modules/EventsModule/topSpeakers/TopSpeakers';

const Events = () => (
  <div>
    <UpcomingEventComponent />
    <PastEvents />
    <FutureEvents />
    <TopSpeakers />
    <Footer />
  </div>
);

export default Events;
