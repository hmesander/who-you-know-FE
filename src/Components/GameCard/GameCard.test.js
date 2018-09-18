/*eslint-disable no-undef camelcase*/

import React from 'react';
import GameCard from './GameCard';
import { shallow } from 'enzyme';

describe('GAMECARD TESTS', () => {
  let wrapper;
  const mockSubmit = jest.fn();
  const mockNextCard = jest.fn();
  const mockChange = jest.fn();
  const mockDeck = [{ image_url: 'google.com' }];

  beforeEach(() => {
    wrapper = shallow(<GameCard handleSubmit={mockSubmit} getNextCard={mockNextCard}gameDeck={mockDeck} handleChange={mockChange}/>);
  });

  it('should match the snapshot when there is a gamedeck to play', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handle change when the user types in the input field', () => {
    const mockEvent = { target: { value: 'something' } };
    wrapper.find('.guess-field').simulate('change', mockEvent);

    expect(mockChange).toHaveBeenCalled();
  });

  it('should call handleSubmit when submit guess button is clicked', () => {
    const button = wrapper.find('.submit-guess-button');
    button.simulate('click');

    expect(mockSubmit).toHaveBeenCalled();
  });

  it('should call getNextCard when Next Card button is clicked', () => {
    wrapper = shallow(<GameCard feedback='correct' getNextCard={mockNextCard} gameDeck={mockDeck} />);
    const button = wrapper.find('.next-card-button');
    button.simulate('click');

    expect(mockNextCard).toHaveBeenCalled();
  });

  it('should match the snapshot when the game is over', () => {
    wrapper = shallow(<GameCard gameOver='true' />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call getDeck function when get deck button is clicked', () => {
    const mockGetDeck = jest.fn();
    wrapper = shallow(<GameCard gameOver='true' getDeck={mockGetDeck}/>);
    const button = wrapper.find('.get-deck-button');
    button.simulate('click');

    expect(mockGetDeck).toHaveBeenCalled();
  });

  it('should call getDeck function when new deck button is clicked', () => {
    const mockGetDeck = jest.fn();
    wrapper = shallow(<GameCard getDeck={mockGetDeck}/>);
    const button = wrapper.find('.new-deck-button');
    button.simulate('click');

    expect(mockGetDeck).toHaveBeenCalled();
  });

  it('should match the snapshot before the game', () => {
    wrapper = shallow(<GameCard />);

    expect(wrapper).toMatchSnapshot();
  });
});