/*eslint-disable no-undef camelcase*/

import React from 'react';
import PlayCards from './PlayCards';
import { shallow } from 'enzyme';

describe('PLAYCARDS TESTS', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PlayCards />);
  });

  it('should match the snapshot when there is a gamedeck to play', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('set the difficulty level in state when set difficulty is called', () => {
    const mockEvent = {target: {value: 'easy'}};
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        cards: [{first_last_name: 'Sterling Archer'}]
      })
    }));
    wrapper.instance().setDifficulty(mockEvent);
    const results = wrapper.instance().state.difficulty;

    expect(results).toEqual('easy');
  });

  it('should call set difficulty when the easy button is clicked', () => {
    const mockEvent = { target: { value: 'easy' } };
    const spy = spyOn(wrapper.instance(), 'setDifficulty');

    const button = wrapper.find('.easy-button');
    button.simulate('click', mockEvent);
    expect(spy).toHaveBeenCalled();
  });

  it('should call set difficulty when the medium button is clicked', () => {
    const mockEvent = { target: { value: 'medium' } };
    const spy = spyOn(wrapper.instance(), 'setDifficulty');

    const button = wrapper.find('.medium-button');
    button.simulate('click', mockEvent);
    expect(spy).toHaveBeenCalled();
  });

  it('should call set difficulty when the hard button is clicked', () => {
    const mockEvent = { target: { value: 'hard' } };
    const spy = spyOn(wrapper.instance(), 'setDifficulty');

    const button = wrapper.find('.hard-button');
    button.simulate('click', mockEvent);
    expect(spy).toHaveBeenCalled();
  });
});