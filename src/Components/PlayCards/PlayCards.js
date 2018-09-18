import React, { Component } from 'react';
import mockData from '../../helpers/mockData.js';
import { retrieveCardsToPlay } from '../../helpers/apiCalls.js';
import GameBoard from '../GameBoard/GameBoard.js';

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
    let results = await retrieveCardsToPlay(1, difficulty);
    this.setState({
      cards: mockData
    });
    return results;
  }

  render() {
    if (!this.state.difficulty) {
      return (
        <div>
          <button className='easy-button'onClick={(event) => this.setDifficulty(event)} value='easy'>Easy</button>
          <button className='medium-button' onClick={(event) => this.setDifficulty(event)} value='medium'>Medium</button>
          <button className='hard-button' onClick={(event) => this.setDifficulty(event)} value='hard'>Hard</button>
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