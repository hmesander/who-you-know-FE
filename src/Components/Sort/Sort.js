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
    // fetch call to retrieve cards to sort, save to variable and return them
    return mockData;
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
    // if cards.length === 0, send sorted array to database
  }

  handleUpVote = () => {
    let cardToSave = this.getNewCard();
    // add property to card of knowledge level with value of two and push it into sorted array in state 
    console.log(cardToSave);
  }

  handleMiddleVote = () => {
    let cardToSave = this.getNewCard();
    // add property to card of knowledge level with value of one and push it into sorted array in state
  }

  handleDownVote = () => {
    let cardToSave = this.getNewCard();
    // add property to card of knowledge level with value of zero and push it into sorted array in state
  }

  render() {
    return (
      <div>
        <Card cards={this.state.cards} handleUpVote={this.handleUpVote} handleMiddleVote={this.handleMiddleVote} handleDownVote={this.handleDownVote}/>
      </div>
    );
  }
}