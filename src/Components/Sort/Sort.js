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
      cards: mockData
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

  handleUpVote = () => {
    let cardToSave = this.getNewCard();
    updateDifficultyLevel(this.props.userId, cardToSave.id, 'easy');
  }

  handleMiddleVote = () => {
    let cardToSave = this.getNewCard();
    updateDifficultyLevel(this.props.userId, cardToSave.id, 'medium');
  }

  handleDownVote = () => {
    let cardToSave = this.getNewCard();
    updateDifficultyLevel(this.props.userId, cardToSave.id, 'hard');
  }

  render() {
    return (
      <div>
        <Card cardsToSort={this.state.cards} handleUpVote={this.handleUpVote} handleMiddleVote={this.handleMiddleVote} handleDownVote={this.handleDownVote}/>
      </div>
    );
  }
}

Sort.propTypes = {
  userId: PropTypes.number
};