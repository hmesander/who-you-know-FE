import React, { Component } from 'react';
import Card from '../Card/Card.js';
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

  showGuessField = () => {
    let display = <div>Form</div>;
    return display;
  }

  render() {
    if (!this.state.difficulty) {
      return (
        <div>
          <button onClick={(event) => this.setDifficulty(event)} value='easy'>Easy</button>
          <button onClick={(event) => this.setDifficulty(event)} value='medium'>Medium</button>
          <button onClick={(event) => this.setDifficulty(event)} value='hard'>Hard</button>
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