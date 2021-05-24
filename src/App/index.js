import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import Routes from '../helpers/Routes';
import './App.scss';
import NavBar from './components/NavBar';
import { getProjects } from '../helpers/data/projectData';

function App() {
  const [admin, setAdmin] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed && (authed.uid === process.env.REACT_APP_ADMIN_UID)) {
        setAdmin(true);
        getProjects().then((projectsArray) => setProjects(projectsArray));
      } else if (admin || admin === null) {
        setAdmin(false);
        getProjects().then((projectsArray) => setProjects(projectsArray));
      }
    });
  }, []);

  return (
    <>
      <NavBar admin={admin} />
      <Routes
       projects={projects}
       setProjects={setProjects}
      />
      </>
  );
}

export default App;
