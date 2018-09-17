import React, { Component } from 'react';
import Card from '../Card/Card.js';
import mockData from '../../helpers/mockData';

export default class Sort extends Component {
  constructor() {
    super();

    this.state = {
      cards: []
    };
  }

  async componentDidMount() {
    const cards = await this.fetchCardsToSort();
    this.setState({
      cards
    });
  }

  fetchCardsToSort = () => {
    console.log('fetch sort');
    return mockData;
  }

  getNewCard = () => {
    const newCards = [...this.state.cards];
    let cardToSave = newCards.shift();
    this.setState({
      cards: newCards
    });
    return cardToSave;
  }

  handleUpVote = () => {
    let cardToSave = this.getNewCard();
    console.log(cardToSave);
  }

  handleMiddleVote = () => {
    let cardToSave = this.getNewCard();
  }

  handleDownVote = () => {
    let cardToSave = this.getNewCard();
  }


  render() {
    return (
      <div>
        <Card cards={this.state.cards} handleUpVote={this.handleUpVote} handleMiddleVote={this.handleMiddleVote} handleDownVote={this.handleDownVote}/>
      </div>
    );
  }
}