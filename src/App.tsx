import React from 'react';
import logo from './powerfleet-logo-80.jpg';
import frameworkImage from './react.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href="https://powerfleet.fathym-it.com/"><img src={logo} className="pf-logo" alt="logo" /></a>
        <div className="siteNav">
          <a href="https://powerfleet.fathym-it.com/dash1/">
            <button className="navbutton">Dash 1</button>
          </a>
          <a href="https://powerfleet.fathym-it.com/dash2/">
            <button className="navbutton">Dash 2</button>
          </a>
          <a href="https://powerfleet.fathym-it.com/dash3/">
            <button className="navbutton">Dash 3</button>
          </a>
        </div>
      </header>
      <br />
      <div className="dashboard">
        <iframe title="powerfleet-LV450-reefer-tracking - Page 1" className="responsive-iframe" src="https://app.powerbi.com/view?r=eyJrIjoiOGJjYTA0MzktMWY4MS00M2I4LTkzYTctMjRmNzQ1YjU1YjU5IiwidCI6IjZkY2JlYmQwLWY4ZDAtNGE5ZC04OWU1LTU4NzNlODE0NmIwYSIsImMiOjR9" frameBorder="0"></iframe>
      </div>
      <br />
      <div className="builtin">
          Built in React<br />
          <img src={frameworkImage} className="frameworkImage" alt="React" />
        </div> 
    </div>
  );
}

export default App;
