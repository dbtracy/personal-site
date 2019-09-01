import React from 'react';
import './App.css';
// import Home from './components/Home'
import Navbar from './components/Navbar'
import Routes from './components/Routes'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes />
      </header>
    </div>
  );
}

export default App;
