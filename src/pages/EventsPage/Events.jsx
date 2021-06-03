import React from 'react';
import PastEvents from '../../modules/EventsModule/pastEvents/PastEvents';
import UpcomingEventComponent from '../../modules/EventsModule/UpcomingEventComponent/UpcomingEventComponent';
import Footer from '../../component/common/footer/Footer';
import FutureEvents from '../../modules/EventsModule/futureEvents/FutureEvents';
import EventHeroSection from '../../modules/EventsModule/heroSection/EventHeroSection';

const Events = () => (
  <div>
    <EventHeroSection />
    <UpcomingEventComponent />
    <PastEvents />
    <FutureEvents />
    <Footer />
  </div>
);

export default Events;
