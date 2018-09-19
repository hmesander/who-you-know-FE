import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = (props) => {
  
  if (props.cardsToSort && props.cardsToSort.length) {
    return (
      <div className='card-component'>
        <div className='card-info-section'>
          <img src={props.cardsToSort[0].image_url} alt='Profile' className='circle-image'></img>
          <h3 className=''>{props.cardsToSort[0].first_last_name}</h3>
          <h6>{props.cardsToSort[0].job_title}</h6>
          <h6>{props.cardsToSort[0].school}</h6>
          <hr className='card-hr'></hr>
        </div>
        <div className='card-lower-container'>
          <p className='card-lower-text'>How well do you know this connection?</p>
          <div className='card-button-container'>
            <button
              className='circle-buttons downvote'
              onClick={() => props.handleDownVote()}
            >Who?</button>
            <button
              className='circle-buttons middlevote'
              onClick={() => props.handleMiddleVote()}
            >Vaguely</button>
            <button
              className='circle-buttons upvote'
              onClick={() => props.handleUpVote()}>BFF</button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>No cards to sort.</p>
        <button
          className='play-deck-button buttons'
          onClick={props.handlePlay}
        >Play a Deck
        </button>
      </div>
    );
  }
};

export default Card;

Card.propTypes = {
  cardsToSort: PropTypes.array,
  handleDownVote: PropTypes.func,
  handleMiddleVote: PropTypes.func,
  handlePlay: PropTypes.func,
  handleUpVote: PropTypes.func
};