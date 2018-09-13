import React, { Component } from 'react';
import './App.css';
import LinkedInButton from './images/LinkedInSignIn.png';
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
          Who <div className="you"> You </div> Know.
        </header>
        <button className="login-button" onClick={this.handleLogin} >
          <img src={LinkedInButton} alt="Log In with LinkedIn" />
        </button>
      </div>
    );
  }
}

export default App;
