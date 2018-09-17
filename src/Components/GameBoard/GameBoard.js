import React, { Component } from 'react';

export default class GameBoard extends Component {
  constructor() {
    super();

    this.state = {
      guess: '',
      sorted: [],
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

  getNextCard = () => {
    if (this.state.cards.length) {
      const newCards = [...this.state.cards];
      let cardToSave = newCards.shift();
      this.setState({
        cards: newCards
      });
      return cardToSave;
    }
  }

  render() {
    if (this.props.cardsToPlay && this.props.cardsToPlay.length) {
      return (
        <div className='card-component'>
          <div className='card-info-section'>
            <img src={this.props.cardsToPlay[0].image_url} alt="Smiley face" className='circle-image'></img>
            <hr className='card-hr'></hr>
          </div>
          <div className='guessfield-container'>
            <label htmlFor="user-guess">Name This Connection:</label>
            <input
              id='user-guess'
              className='guess-field input-fields'
              aria-label='Please Enter Your Guess'
              type='text'
              name='guess'
              value={this.state.guess}
              onChange={this.handleChange}
            />
            <button className='submit-guess-button' onClick={() => this.handleSubmit()}>Submit Guess</button>
          </div>
          <div className='feedback-container'>
            <p>{this.state.feedback}</p>
            {this.state.feedback ? <button onClick={() => this.getNextCard()}>Next Card</button> : null}
          </div>
          <div className='card-button-container'>
            <button
              className='circle-buttons'
            >No</button>
            <button
              className='circle-buttons'
            >Yes</button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
        </div>
      );
    }

  }
}