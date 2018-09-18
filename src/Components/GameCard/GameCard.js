import React from 'react';
import PropTypes from 'prop-types';

const GameCard = (props) => {
  if (props.gameDeck && props.gameDeck.length) {
    return (
      <div className='game-card-component'>
        <div className='game-card-info-container'>
          <img src={props.gameDeck[0].image_url} alt='Profile Picture' className='circle-image'></img>
          <hr className='card-hr'></hr>
        </div>
        <div className='guessfield-container'>
          <label htmlFor='user-guess'>Name This Connection:</label>
          <input
            id='user-guess'
            className='guess-field input-fields'
            aria-label='Please Enter Your Guess'
            type='text'
            name='guess'
            value={props.guess}
            onChange={(event) => props.handleChange(event)}
          />
          <button className='submit-guess-button' onClick={() => props.handleSubmit()}>Submit Guess</button>
        </div>
        <div className='feedback-container'>
          <p>{props.feedback}</p>
          {props.feedback ? <button className='next-card-button' onClick={() => props.getNextCard()}>Next Card</button> : null}
        </div>
      </div>
    );
  } else if (props.gameOver) {
    return (
      <div>
        <h3>Results:</h3>
        <p>Correct: {props.correct}</p>
        <p>Incorrect: {props.incorrect}</p>
        <button className='get-deck-button'onClick={() => props.getDeck()}>Get Deck</button>
      </div>
    );
  } else {
    return (
      <div>
        <button className='new-deck-button' onClick={() => props.getDeck()}>Get Deck</button>
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
  guess: PropTypes.string,
  gameOver: PropTypes.bool,
  feedback: PropTypes.string,
  correct: PropTypes.number,
  incorrect: PropTypes.number
};