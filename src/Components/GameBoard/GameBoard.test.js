import React from 'react';
import GameBoard from './GameBoard';
import { shallow } from 'enzyme';

describe('GAMEBOARD TESTS', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<GameBoard />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update the guess property in state when handle change is called', () => {
    const mockEvent = {target: {value: 'Chet Manley'}};

    wrapper.instance().handleChange(mockEvent);
    const results = wrapper.instance().state.guess;

    expect(results).toEqual('Chet Manley');
  });

  it('should increase the correct counter in state when increaseCounter is called', () => {
    wrapper.instance().increaseCounter();
    const results = wrapper.instance().state.correct;

    expect(results).toEqual(1);
  });

  it('should increase the incorrect counter in state when decreaseCounter is called', () => {
    wrapper.instance().decreaseCounter();
    const results = wrapper.instance().state.incorrect;

    expect(results).toEqual(1);
  });

  it('should add the cards to state when get deck is called', () => {
    const mockPropCards = [{first_last_name: 'Sterling Archer'}];
    wrapper = shallow(<GameBoard cardsToPlay={mockPropCards}/>);
    wrapper.instance().getDeck();
    const results = wrapper.instance().state.cards;

    expect(results.length).toEqual(1);
  });

  it('should reset the guess and feedback fields when clear fields is called and the cards array in state has a length greater than 1', () => {
    const mockCards = [{first_last_name: 'Sterling Archer'}, {first_last_name: 'Chet Manley'}];
    wrapper.instance().setState({
      cards: mockCards,
      guess: 'taco',
      feedback: 'incorrect'
    });
    wrapper.instance().clearFields();
    const guess = wrapper.instance().state.guess;
    const feedback = wrapper.instance().state.feedback;
    
    expect(guess).toEqual('');
    expect(feedback).toEqual('');
  });

  it.skip('should call the end round function when clear fields is called with the cards array at 1 or less', async () => {
    wrapper = shallow(<GameBoard />);
    const spy = spyOn(wrapper.instance(), 'endRound');
    // wrapper.instance().forceUpdate();

    wrapper.instance().clearFields();
    // wrapper.instance().forceUpdate();
    expect(spy).toHaveBeenCalled();
  });


  it('should update state to set gameover to true, guess and feedback to empty strings when endRound is called', () => {
    wrapper.instance().setState({
      gameOver: false,
      guess: 'taco',
      feedback: 'incorrect'
    });
    wrapper.instance().endRound();
    const gameOver = wrapper.instance().state.gameOver;
    const guess = wrapper.instance().state.guess;
    const feedback = wrapper.instance().state.feedback;

    expect(gameOver).toEqual(true);
    expect(guess).toEqual('');
    expect(feedback).toEqual('');
  });
});