import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Controls from '../Controls/Controls.js';
// import Login from './Login.js';
import Sort from '../Sort/Sort.js';
import PlayCards from '../PlayCards/PlayCards.js';
import './App.css';
import Auth from '../../Auth/Auth.js';
import history from '../../history';
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
    this.props.history.push('/welcome');
  }

  handleLogout = () => {
    auth.logout();
    this.setState({
      hash: ''
    });
  }

  handleSort = () => {
    this.props.history.push('/sort');
  }

  handlePlayDeck = () => {
    this.props.history.push('/play');
  }

  parseURL = url => {
    let splitUrl = url.split('#access_token=');
    if (splitUrl.length > 1) {
      let accessToken = splitUrl[1].split('&expires_in=')[0];
      let idToken = splitUrl[1].split('&id_token=')[1];
      // this.postTokens(accessToken, id_token);
      return { idToken, accessToken };
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
    let display;
    if (this.state.hash !== '') {
      display = 
      <button
        className="login-button logout"
        onClick={this.handleLogout}>
          Logout
      </button>;
    } else {
      display = 
      <div>
        <p className="App-intro">
          To get started, please login.
        </p>
        <button
          className="login-button login"
          onClick={this.handleLogin}>
          Login
        </button>
      </div>;
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Who
          you
          know.</h1>
        </header>
        {display}
        <Route path='/callback' render={() => <Controls handleSort={this.handleSort} handlePlay={this.handlePlayDeck} />} />
        <Route path='/sort/' render={() => <Sort />} />
        <Route path='/play/' render={() => <PlayCards />} />
      </div>
    );
    
  }
}
export default withRouter(App);
