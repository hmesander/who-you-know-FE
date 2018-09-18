import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = (props) => {
  
  if (props.cardsToSort && props.cardsToSort.length) {
    return (
      <div className='card-component'>
        <div className='card-info-section'>
          <img src={props.cardsToSort[0].image_url} alt="Smiley face" className="circle-image"></img>
          <h3 className=''>{props.cardsToSort[0].first_last_name}</h3>
          <h6>{props.cardsToSort[0].job_title}</h6>
          <h6>{props.cardsToSort[0].school}</h6>
          <hr className='card-hr'></hr>
        </div>
        <div className='card-button-container'>
          <button 
            className='circle-buttons downvote'
            onClick={() => props.handleDownVote()}
          >No Clue</button>
          <button 
            className='circle-buttons middlevote'
            onClick={() => props.handleMiddleVote()}
          >Vague Idea</button>
          <button 
            className='circle-buttons upvote' 
            onClick={() => props.handleUpVote()}>BFF</button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p>No cards to sort.</p>
      </div>
    );
  }
};

export default Card;

Card.propTypes = {
  cardsToSort: PropTypes.array,
  handleDownVote: PropTypes.func,
  handleMiddleVote: PropTypes.func,
  handleUpVote: PropTypes.func
};