import React from 'react';
import logo from './logo.svg';
import './App.css';
import FetchComponent from './Component/FetchComponent';


function App() {
  return(
    <div className='App'>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
            (*_*) Beer Me Please (*_*)
        </h1>
      <FetchComponent />
      </header>
      </div>
  )
}

export default App;


