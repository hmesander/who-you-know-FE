import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Controls from './Controls.js';
import Login from './Login.js';
import Sort from './Sort.js';
import './App.css';
import { authorizeUser } from './helpers/apiCalls.js';

class App extends Component {
  constructor() {
    super();

  }

  handleLogin = () => {
    console.log('click');
    this.props.history.push('/welcome');
  }

  handleSort = () => {
    console.log('sort');
    this.props.history.push('/sort');
  }

  handlePlayDeck = () => {
    console.log('play');
    this.props.history.push('/play');
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
        {/* <Route exact path='/' component={Login} /> */}
        <Route exact path='/welcome/' render={() => <Controls handleSort={this.handleSort} handlePlay={this.handlePlayDeck} />} />
        <Route path='/sort/' render={() => <Sort />} />
      </div>
    );
  }
}

export default withRouter(App);
