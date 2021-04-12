import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from '../pages/AboutUsPage/AboutUs';
import Home from '../pages/HomePage/Home';

const AppRoutes = () => (
  <div>
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={AboutUs} exact />
      </Switch>
    </Router>
  </div>
);

export default AppRoutes;
