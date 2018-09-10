import React, { Component } from 'react';
import './App.css';
import { authorizeUser } from './helpers/apiCalls.js';

class App extends Component {
  constructor() {
    super();

  }

  handleLogin = () => {
    console.log('click');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Who 
          you
          know.</h1>
        </header>
        <p className="App-intro">
          To get started, please login.
        </p>
        <button 
          className="login-button" 
          onClick={this.handleLogin}>
          Login
        </button>
      </div>
    );
  }
}

export default App;
