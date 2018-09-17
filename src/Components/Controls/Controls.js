import React from 'react';

const Controls = (props) => {
  return (
    <div className='controls-component'>
      <button className='sort-cards-button login-button' onClick={props.handleSort}>Sort Cards</button>
      <button className='play-deck-button login-button' onClick={props.handlePlay}>Play a Deck</button>
    </div>
  );
};

export default Controls;