import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from '../pages/AboutUsPage/AboutUs';
import Home from '../pages/HomePage/Home';

const AppRoutes = () => (
  <div>
    <Router>
      <Switch>
        <Route path="/about" component={AboutUs} exact />
        <Route path="/" component={Home} exact />
      </Switch>
    </Router>
  </div>
);

export default AppRoutes;
