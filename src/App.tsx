import React from 'react';
import logo from './powerfleet-logo-80.jpg';
import dashboard from './midwest-reefer-dashboard.jpg';
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
        </div>
      </header>
      <div className="main-container">
          <div className="dashContainer">
            <div>
              <div className="dashTitle">Dashboard 1</div>
              <div className="dashText">
                <em>Built in Angular</em>
                <br /><br />
                Fathym micro frontends are a powerful tool that allow your team to use the frameworks best fit for the job.  Break free from monolithic, use open source and custom code in harmony.
              </div>
              <a href="https://powerfleet.fathym-it.com/dash1/">
                <button className="button">Visit Site</button>
              </a>
            </div>
            <img src={dashboard} className="dashImage" alt="Reefer Tracking" />
          </div>

          <br /><br />

          <div className="dashContainer">
            <div>
              <div className="dashTitle">Dashboard 2</div>
              <div className="dashText">
                <em>Built in Svelte</em>
                <br /><br />
                Take your experience and coding skills to new heights. Fathym will help you develop low-code solutions that enable junior and mid-level developers to accelerate.
              </div>
              <a href="https://powerfleet.fathym-it.com/dash2/">
                <button className="button">Visit Site</button>
              </a>
            </div>
            <img src={dashboard} className="dashImage" alt="Reefer Tracking" />
          </div>
      </div>
      <div className="builtin">
        Built in React<br />
        <img src={frameworkImage} className="frameworkImage" alt="React" />
      </div>
    </div>
  );
}

export default App;
