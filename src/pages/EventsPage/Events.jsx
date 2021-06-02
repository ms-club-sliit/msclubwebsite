import React from 'react';
import PastEvents from '../../modules/EventsModule/pastEvents/PastEvents';
import UpcomingEventComponent from '../../modules/EventsModule/UpcomingEventComponent/UpcomingEventComponent';
import Footer from '../../component/common/footer/Footer';
import FutureEvents from '../../modules/EventsModule/futureEvents/FutureEvents';

const Events = () => (
  <div>
    <UpcomingEventComponent />
    <PastEvents />
    <FutureEvents />
    <Footer />
  </div>
);

export default Events;
