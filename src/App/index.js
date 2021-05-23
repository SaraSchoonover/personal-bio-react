import React from 'react';
import Routes from '../helpers/Routes';
import './App.scss';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes />
      </div>
  );
}

export default App;
