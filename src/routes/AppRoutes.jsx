import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from '../pages/AboutUsPage/AboutUs';
import Events from '../pages/EventsPage/Events';
import Home from '../pages/HomePage/Home';
import Footer from '../component/common/footer/Footer';
import ContactUs from '../pages/ContactUsPage/ContactUs';

const AppRoutes = () => (
  <div>
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={AboutUs} exact />
        <Route path="/events" component={Events} exact />
        <Route path="/contactus" component={ContactUs} exact />
      </Switch>
    </Router>
    <Footer />
  </div>
);

export default AppRoutes;
