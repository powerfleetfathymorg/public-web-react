import React from 'react';
import fathymemotibit from './fathym-emotibit.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://powerfleet.fathym-it.com/"><img src={fathymemotibit} className="fathymemotibit" alt="logo" /></a>        
      </header>
      <br />
      <div className="dashboard">
        <iframe title="Emotibit" className="responsive-iframe" src="https://app.powerbi.com/reportEmbed?reportId=bc2aeda7-6aeb-4bff-a232-c5ee354fd0b8&autoAuth=true&ctid=6dcbebd0-f8d0-4a9d-89e5-5873e8146b0a" frameBorder="0"></iframe>
      </div>
    </div>
  );
}

export default App;
