import React, { Component } from 'react';
import Card from '../Card/Card.js';
import mockData from '../../helpers/mockData.js';
import { retrieveCardsToPlay } from '../../helpers/apiCalls.js';

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
    console.log(event.target.value);
    this.setState({
      difficulty: event.target.value
    });
    this.fetchCardsToPlay(event.target.value);
  }

  fetchCardsToPlay = async (difficulty) => {
    let results = await retrieveCardsToPlay(1, difficulty);
    // fetch call to retrieve cards to sort, save to variable and return them
    console.log(results);
    this.setState({
      cards: mockData
    });
    return results;
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
          <Card cardsToPlay={this.state.cards} />
        </div>
      );
    } 
  }
}