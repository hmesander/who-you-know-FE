import React, { Component } from 'react';
import mockData from '../../helpers/mockData.js';
import { retrieveCardsToPlay } from '../../helpers/apiCalls.js';
import GameBoard from '../GameBoard/GameBoard.js';
import PropTypes from 'prop-types';
import './PlayCards.css';

export default class PlayCards extends Component {
  constructor() {
    super();

    this.state = {
      difficulty: '',
      cards: [],
      sorted: [],
      score: 0
    };
  }

  setDifficulty = (event) => {
    this.setState({
      difficulty: event.target.value
    });
    this.fetchCardsToPlay(event.target.value);
  }

  fetchCardsToPlay = async (difficulty) => {
    let results = await retrieveCardsToPlay(2, difficulty);
    console.log(results);
    this.setState({
      cards: mockData
    });
    return results;
  }

  render() {
    if (!this.props.userId) {
      return (
        <div className='login-error-container'>
          <h6 className='login-error-text'>You must be logged in to Play!</h6>
        </div>
      );
    } else if (!this.state.difficulty) {
      return (
        <div className='difficulty-button-container'>
          <button className='easy-button buttons difficulty-buttons' onClick={(event) => this.setDifficulty(event)} value='easy'>Easy</button>
          <button className='medium-button buttons difficulty-buttons' onClick={(event) => this.setDifficulty(event)} value='medium'>Medium</button>
          <button className='hard-button buttons difficulty-buttons' onClick={(event) => this.setDifficulty(event)} value='hard'>Hard</button>
        </div>
      );
    } else {
      return (
        <div>
          <GameBoard cardsToPlay={this.state.cards} />
        </div>
      );
    } 
  }
}

PlayCards.propTypes = {
  userId: PropTypes.number
};