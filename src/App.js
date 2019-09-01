import React from 'react';
import { Router } from 'react-router-dom'
import './App.css';

import history from './history'
import Navbar from './components/Navbar/Navbar'
import Routes from './components/Routes'

function App() {
  return (
    <div className="App">
      <Router history={history} >
        <Navbar />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
