import React, { Component } from 'react';
import './App.css';
import Auth from './Auth/Auth.js';
const auth = new Auth();


class App extends Component {

  handleLogin = () => {
    auth.login();
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