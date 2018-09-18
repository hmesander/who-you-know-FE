import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Controls from '../Controls/Controls.js';
import Sort from '../Sort/Sort.js';
import PlayCards from '../PlayCards/PlayCards.js';
import './App.css';
import Auth from '../../Auth/Auth.js';
import history from '../../history';
import PropTypes from 'prop-types';
import { postTokens } from '../../helpers/apiCalls.js';
const auth = new Auth();

export class App extends Component {
  constructor() {
    super();

    this.state = {
      hash: '',
      idToken: '',
      accessToken: '',
      userId: ''
    };
  }

  async componentDidMount() {
    if (history.location.hash) {
      await this.setState({
        hash: history.location.hash
      });
      let { idToken, accessToken } = await this.parseURL(history.location.hash);
      this.setState({
        idToken,
        accessToken
      });
      let results = await postTokens(this.state.accessToken, this.state.idToken);
      this.setState({
        userId: results.id
      });
    } 
  }

  handleLogin = () => {
    auth.login();
  }

  handleLogout = () => {
    auth.logout();
    this.setState({
      hash: '', 
      userId: ''
    });
    this.props.history.push('/');
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
      return { idToken, accessToken };
    }
  }

  render() {
    let display;
    if (this.state.hash !== '' || this.state.userId) {
      display = 
      <button
        className="buttons logout-button"
        onClick={this.handleLogout}>
          Logout
      </button>;
    } else {
      display = 
      <div className="login-container">
        <p className="App-intro">
          To get started, please login.
        </p>
        <button
          className="buttons login-button"
          onClick={this.handleLogin}>
          Login
        </button>
      </div>;
    }

    return (
      <div className="App">
        <header className="App-header">
          <div className='title-container'>
            <h1 className="App-title">Who 
              <span className='logo'>you</span> 
          know.</h1>
          </div>
          
          {display}
        </header>
        <Route path='/callback' render={() => <Controls handleSort={this.handleSort} handlePlay={this.handlePlayDeck} />} />
        <Route exact path='/sort' render={() => <Sort userId={this.state.userId} handlePlay={this.handlePlayDeck}/>} />
        <Route exact path='/play' render={() => <PlayCards userId={this.state.userId}/>} />
      </div>
    );
    
  }
}
export default withRouter(App);

App.propTypes = {
  history: PropTypes.string
};
