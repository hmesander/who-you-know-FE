import React, { Component } from 'react';
import './App.css';
import Auth from './Auth/Auth.js';
import history from './history';
const auth = new Auth();

class App extends Component {
  constructor() {
    super();

    this.state = {
      hash: ''
    };
  }

  async componentDidMount() {
    if (history.location.hash) {
      await this.setState({
        hash: history.location.hash
      });
    }
    await this.parseURL(history.location.hash);
  }

  handleLogin = async () => {
    await auth.login();
  }

   handleLogout = () => {
     auth.logout();
     this.setState({
       hash: ''
     });
   }

  parseURL = url => {
    let splitUrl = url.split('#access_token=');
    if (splitUrl.length > 1) {
      let accessToken = splitUrl[1].split('&expires_in=')[0];
      let idToken = splitUrl[1].split('&id_token=')[1];
      // this.postTokens(accessToken, id_token);
      return {idToken, accessToken};
    }
  }

  postTokens = async (accessToken, idToken) => {
    console.log('postTokens');
    // const response = await fetch('/api/v1/users', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     accessToken,
    //     idToken
    //   })
    // });
    // const results = await response.json();
  }

  render() {
    let button;
    if (this.state.hash !== '') {
      button = <button
        className="login-button logout"
        onClick={this.handleLogout}>
          Logout
      </button>;
    } else {
      button = <button
        className="login-button login"
        onClick={this.handleLogin}>
          Login
      </button>;
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