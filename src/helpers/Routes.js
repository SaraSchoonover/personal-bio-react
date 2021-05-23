import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Home from '../views/Home';
import Projects from '../views/Projects';
import Technologies from '../views/Technologies';
import Contact from '../views/Contact';
import AboutMe from '../views/AboutMe';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />

        <Route
        path='/about'
        component={AboutMe}
        />
        <Route
        path='/projects'
        component={Projects}
        />

        <Route
          path='/technologies'
          component={Technologies}
        />

        <Route
          path='/contact'
          component={Contact}
        />
      </Switch>
    </div>
  );
}

// Routes.propTypes = {
//   user: PropTypes.any
// };
