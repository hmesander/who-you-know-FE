import React from 'react';
import PropTypes from 'prop-types';


const Controls = (props) => {
  return (
    <div className='controls-component'>
      <button 
        className='sort-cards-button buttons' 
        onClick={props.handleSort}
      >Sort Cards
      </button>
      <button 
        className='play-deck-button buttons' 
        onClick={props.handlePlay}
      >Play a Deck
      </button>
    </div>
  );
};

export default Controls;

Controls.propTypes = {
  handleSort: PropTypes.func,
  handlePlay: PropTypes.func
};