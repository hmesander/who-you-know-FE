import React, { Component } from 'react';
import Card from '../Card/Card.js';
import mockData from '../../helpers/mockData';
import { getConnectionsForUser, updateDifficultyLevel } from '../../helpers/apiCalls.js';

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
      cards
    });
  }

  // fetchCardsToSort = () => {
  //   console.log('fetch sort');
  //   fetch call to retrieve cards to sort, save to variable and return them
  //   return mockData;
  // }

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