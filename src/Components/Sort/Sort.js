import React, { Component } from 'react';
import Card from '../Card/Card.js';
import mockData from '../../helpers/mockData';
import { getConnectionsForUser, updateDifficultyLevel } from '../../helpers/apiCalls.js';
import PropTypes from 'prop-types';

export default class Sort extends Component {
  constructor() {
    super();

    this.state = {
      cards: []
    };
  }

  async componentDidMount() {
    const cards = await getConnectionsForUser(this.props.userId);
    this.setState({
      cards: cards
    });
  }

  getNewCard = () => {
    if (this.state.cards.length) {
      const newCards = [...this.state.cards];
      let cardToSave = newCards.shift();
      this.setState({
        cards: newCards
      });
      return cardToSave;
    }
  }

  handleVote = (event) => {
    let difficulty = event.target.value;
    let cardToSave = this.getNewCard();
    updateDifficultyLevel(this.props.userId, cardToSave.id, difficulty);
  }

  render() {
    if (this.props.userId) {
      return (
        <div>
          <Card cardsToSort={this.state.cards} handleVote={this.handleVote} handlePlay={this.props.handlePlay} />
        </div>
      );
    } else {
      return (
        <div className='login-error-container'>
          <h6 className='login-error-text'>You must be logged in to Sort!</h6>
        </div>
      );
    }
  }
}

Sort.propTypes = {
  userId: PropTypes.number,
  handlePlay: PropTypes.func
};