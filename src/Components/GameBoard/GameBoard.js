import React, { Component } from 'react';
import GameCard from '../GameCard/GameCard.js';

export default class GameBoard extends Component {
  constructor() {
    super();

    this.state = {
      guess: '',
      sorted: [],
      cards: [],
      correct: 0,
      incorrect: 0,
      feedback: ''
    };
  }

  handleChange = (event) => {
    const guess = event.target.value;
    this.setState({
      guess
    });
  }

  handleSubmit = () => {
    if (this.state.guess.toLowerCase() === this.props.cardsToPlay[0].first_last_name.toLowerCase()) {
      this.setState({
        feedback: 'Correct!'
      });
    } else {
      this.setState({
        feedback: 'Incorrect!'
      });
    }
  }

  getDeck = () => {
    this.setState({
      cards: this.props.cardsToPlay
    });
  }

  getNextCard = () => {
    if (this.state.cards.length) {
      let newCards = [...this.state.cards];
      let cardToSave = newCards.shift();
      this.setState({
        cards: newCards,
        sorted: [this.state.sorted, ...cardToSave]
      });
      // return cardToSave;
    }
    this.clearFields();
  }

  clearFields = () => {
    this.setState({
      guess: '',
      feedback: ''
    });
  }

  render() {
    return (
      <div>
        <GameCard gameDeck={this.state.cards} handleSubmit={this.handleSubmit} handleChange={this.handleChange} guess={this.state.guess} getDeck={this.getDeck} feedback={this.state.feedback} getNextCard={this.getNextCard}/>
      </div>
    );
  }
}