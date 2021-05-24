import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import Projects from '../views/Projects';
import Technologies from '../views/Technologies';
import Contact from '../views/Contact';
import AboutMe from '../views/AboutMe';

export default function Routes({
  firebaseKey,
  githubUrl,
  screenshot,
  technologiesUsed,
  title,
  url,
  projects,
  setProjects,
}) {
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
        component={() => <Projects
          firebaseKey={firebaseKey}
          githubUrl ={githubUrl}
          screenshot={screenshot}
          technologiesUsed={technologiesUsed}
          title={title}
          url={url}
          setProjects={setProjects}
          projects={projects}
          />}
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

Routes.propTypes = {
  firebaseKey: PropTypes.string,
  githubUrl: PropTypes.string,
  screenshot: PropTypes.string,
  technologiesUsed: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  projects: PropTypes.array,
  setProjects: PropTypes.func
};
