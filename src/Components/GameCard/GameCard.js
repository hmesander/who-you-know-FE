import React from 'react';
import PropTypes from 'prop-types';
import './GameCard.css';

const GameCard = (props) => {
  if (props.gameDeck && props.gameDeck.length) {
    return (
      <div className='game-card-component'>
        <div className='game-card-info-container'>
          <img src={props.gameDeck[0].image_url} alt='Profile' className='circle-image game-image'></img>
          <hr className='card-hr'></hr>
        </div>
        <div className='guessfield-container'>
          <label htmlFor='user-guess'>Name This Connection:</label>
          <span className='input-holder'>
            <input
              id='user-guess'
              className='guess-field input-fields'
              aria-label='Please Enter Your Guess'
              type='text'
              name='guess'
              value={props.guess}
              onChange={(event) => props.handleChange(event)}
            />
            <button className='submit-guess-button buttons' onClick={() => props.handleSubmit()}>Submit Guess</button>
          </span>
        </div>
        <div className='feedback-container'>
          <p>{props.feedback}</p>
          {props.feedback ? <button className='next-card-button' onClick={() => props.getNextCard()}>Next Card</button> : null}
        </div>
      </div>
    );
  } else if (props.gameOver) {
    let fraction = props.correct / props.total;
    let percentage = Math.round(fraction * 100);
    return (
      <div className='results-card'>
        <h3>Results:</h3>
        <p>Correct: {props.correct}</p>
        <p>Incorrect: {props.incorrect}</p>
        <p>Percentage: {percentage}%</p>
        <div className='scoreboard-button-container'>
          {props.incorrect ? <button className='review-button buttons' onClick={() => props.reviewIncorrect()}>Redo Incorrect</button> : null}
          <button className='get-deck-button buttons' onClick={() => props.getDeck()}>Get New Deck</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className='new-deck-container'>
        <button className='new-deck-button buttons' onClick={() => props.getDeck()}>Get Deck</button>
      </div>
    );
  }
};

export default GameCard;

GameCard.propTypes = {
  gameDeck: PropTypes.array,
  getDeck: PropTypes.func,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  getNextCard: PropTypes.func,
  reviewIncorrect: PropTypes.func,
  guess: PropTypes.string,
  feedback: PropTypes.string,
  gameOver: PropTypes.bool,
  correct: PropTypes.number,
  total: PropTypes.number,
  incorrect: PropTypes.number
};