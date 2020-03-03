import React from 'react';
import logo from './logo.svg';
import './App.css';
import ComputerClock from './components/Clock/ComputerClock';
import WorldClock from './components/Clock/WorldClock';

  
  function App(props) {
    return (<div>
      <h1>exemplo de acesso a api externa</h1>
      <ComputerClock/>
      <WorldClock />
    </div>);
  }
export default App;
