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
        <div className="App-header">
          <Navbar />
          <Routes />
        </div>
      </Router>
    </div>
  );
}

export default App;
