import React, { Component } from 'react';
import GameCard from '../GameCard/GameCard.js';
import PropTypes from 'prop-types';

export default class GameBoard extends Component {
  constructor() {
    super();

    this.state = {
      guess: '',
      sorted: [],
      cards: [],
      correct: 0,
      incorrect: 0,
      total: 0,
      feedback: '',
      answer: '',
      gameOver: false
    };
  }

  handleChange = (event) => {
    const guess = event.target.value;
    this.setState({
      guess
    });
  }

  handleSubmit = () => {
    if (this.state.guess) {
      this.checkGuessField();
    } else {
      return;
    } 
  }

  checkGuessField = () => {
    if (this.state.guess.toLowerCase() === this.state.cards[0].first_last_name.toLowerCase()) {
      this.increaseCounter();
      this.setState({
        feedback: 'Correct!',
        answer: 'correct'
      });
    } else {
      this.decreaseCounter();
      this.setState({
        feedback: 'Incorrect!',
        answer: 'incorrect'
      });
    }
  }

  increaseCounter = () => {
    this.setState({
      correct: this.state.correct + 1,
      total: this.state.total + 1
    });
  }

  decreaseCounter = () => {
    this.setState({
      incorrect: this.state.incorrect + 1,
      total: this.state.total + 1
    });
  }

  getDeck = () => {
    let cardsToSave = [...this.props.cardsToPlay];
    let shortenedList = cardsToSave.splice(0, 12);
    this.setState({
      cards: shortenedList,
      correct: 0,
      incorrect: 0,
      total: 0
    });
  }

  getNextCard = () => {
    if (this.state.cards.length) {
      let newCards = [...this.state.cards];
      let cardToSave = newCards.shift();
      cardToSave.answer = this.state.answer;
      this.setState({
        cards: newCards,
        sorted: this.state.sorted.concat(cardToSave)
      });
      this.clearFields();
    } else {
      this.endRound();
    }
  }

  clearFields = () => {
    if (this.state.cards.length - 1) {
      this.setState({
        guess: '',
        feedback: ''
      });
    } else {
      this.endRound();
    }
  }

  endRound = () => {
    this.setState({
      gameOver: true,
      guess: '',
      feedback: ''
    });
  }

  reviewIncorrect = () => {
    const incorrectAnswers = this.state.sorted.filter(answer => answer.answer === 'incorrect');
    this.setState({
      cards: incorrectAnswers,
      sorted: [],
      correct: 0,
      incorrect: 0,
      total: 0
    });
  }

  render() {
    return (
      <div>
        <GameCard gameDeck={this.state.cards} handleSubmit={this.handleSubmit} handleChange={this.handleChange} guess={this.state.guess} getDeck={this.getDeck} feedback={this.state.feedback} getNextCard={this.getNextCard} gameOver={this.state.gameOver} correct={this.state.correct} incorrect={this.state.incorrect} reviewIncorrect={this.reviewIncorrect} total={this.state.total}/>
      </div>
    );
  }
}

GameBoard.propTypes = {
  cardsToPlay: PropTypes.array
};