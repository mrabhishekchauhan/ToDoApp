import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'semantic-ui-css/semantic.min.css';

import ListTasks from './ListTasks';
import ToDo from './ToDo';
class App extends Component {
  render() {
    return (
      <div>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <div>
          <ToDo />
        </div>
        <div>
	        <ListTasks displaytext = "second Component's data"/>
        </div>
      </div>
    );
  }
}

export default App;
