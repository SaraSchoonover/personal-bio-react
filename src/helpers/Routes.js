import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import Projects from '../views/Projects';
import Technologies from '../views/Technologies';
import AddProjects from '../views/AddProjects';

// The PrivateRoute function is creating a private route and returing the specified route based on the props
// We specify the specific props we want to use in the routeChecker and pass the rest with the spread
const AdminRoute = ({ component: Component, admin, ...rest }) => {
  // when we call this function in the return, it is looking for an argument. `props` here is taco.
  const routeChecker = (taco) => (admin
    ? (<Component {...taco} user={admin} />)
    : (<Redirect to={{ pathname: '/', state: { from: taco.location } }} />));
    // this render method is one we can use instead of component. Since the components are being dynamically
  // created, we use render. Read the docs for more info: https://reactrouter.com/web/api/Route/render-func

  // Just like in the routes if we want the dynamically rendered component to have access to the Router props, we have to pass `props` as an argument.
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

AdminRoute.propTypes = {
  component: PropTypes.func,
  admin: PropTypes.any
};

export default function Routes({
  admin,
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
          admin={admin}

          />}
        />

        <Route
          path='/technologies'
          component={Technologies}
        />

         <AdminRoute
          path='/add-project'
          admin={admin}
          component={() => <AddProjects
            setProjects={setProjects}
            />}
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
  setProjects: PropTypes.func,
  admin: PropTypes.any
};
