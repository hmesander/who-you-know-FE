import React, { Component } from 'react';
import Card from '../Card/Card.js';
import mockData from '../../helpers/mockData.js';

export default class PlayCards extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      sorted: [],
      score: 0
    };
  }

  async componentDidMount() {
    const cards = await this.fetchCardsToPlay();
    this.setState({
      cards
    });
  }

  fetchCardsToPlay = () => {
    console.log('fetch play');
    // fetch call to retrieve cards to sort, save to variable and return them
    return mockData;
  }

  render() {
    return (
      <div>
        <Card cards={this.state.cards} />
      </div>
    );
  }
}