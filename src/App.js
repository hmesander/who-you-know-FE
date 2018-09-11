import React, { Component } from 'react';
import './App.css';
import Auth from './Auth/Auth.js';
import history from './history';

const auth = new Auth();
console.log(history.location.hash)


class App extends Component {
  constructor() {
    super();

    this.state = {
      hash: ''
    }
  }

  componentDidMount() {
    if (history.location.hash) {
    this.setState({
      hash: history.location.hash
    })
  }
  this.parseURL(history.location.hash)
  }

  handleLogin = () => {
    auth.login();
  }

   handleLogout = () => {
    console.log('logout')
    auth.logout();
  }

  parseURL = url => {
    let splitUrl = url.split('#access_token=');
    if (splitUrl[1]) {
      let parsedUrl = splitUrl[1].split('&scope=openid&expires_in=7200&token_type=Bearer&state=')
      const parsedUrl2 = parsedUrl[1].split('&id_token=')
    var accessToken = parsedUrl[0];
    var idToken = parsedUrl2[1];
    }
    console.log(accessToken, idToken)
    this.postTokens(accessToken, idToken)
  }

  postTokens = async (accessToken, idToken) => {
    const response = await fetch('/api/v1/users', {
      method: 'POST',
      body: JSON.stringify({
      accessToken,
      idToken
    })
    });
    const results = await response.json();
  }

  render() {

    const isAuthenticated = auth.isAuthenticated();
    let button;
    if (isAuthenticated) {
      button = <button
          className="login-button"
          onClick={this.handleLogout}>
          Logout
        </button>
    } else {
      button = <button
          className="login-button"
          onClick={this.handleLogin}>
          Login
        </button>
    }

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
        {button}
      </div>
    );
    
  }
}

export default App;