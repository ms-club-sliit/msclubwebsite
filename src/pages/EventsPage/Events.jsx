import React from 'react';
import PastEvents from '../../modules/EventsModule/pastEvents/PastEvents';
import UpcomingEventComponent from '../../modules/EventsModule/UpcomingEventComponent/UpcomingEventComponent';
import FutureEvents from '../../modules/EventsModule/futureEvents/FutureEvents';

const Events = () => (
  <div>
    <UpcomingEventComponent />
    <PastEvents />
    <FutureEvents />
  </div>
);

export default Events;
