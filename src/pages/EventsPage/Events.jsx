import React from 'react';
import PastEvents from '../../modules/EventsModule/pastEvents/PastEvents';
import UpcomingEventComponent from '../../modules/EventsModule/UpcomingEventComponent/UpcomingEventComponent';

const Events = () => (
  <div>
    <UpcomingEventComponent />
    <PastEvents />
  </div>
);

export default Events;
