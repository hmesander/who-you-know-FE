import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className='card-component'>
      <div className='card-info-section'>
        <img src="https://pbs.twimg.com/profile_images/512675211309633536/lYHh4p7W_400x400.jpeg" alt="Smiley face" className="circle-image"></img>
        <h3 className=''>Chet Manley</h3>
        <h6>ISIS Field Agent</h6>
        <h6>Georgetown University</h6>
        <hr className='card-hr'></hr>
      </div>
      <div className='card-button-container'>
        <button className='circle-buttons'>No Clue</button>
        <button className='circle-buttons'>Vague Idea</button>
        <button className='circle-buttons'>BFF</button>
      </div>
    </div>
  );
};

export default Card;