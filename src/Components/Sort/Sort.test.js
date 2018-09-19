/*eslint-disable no-undef*/

import React from 'react';
import Sort from './Sort';
import { shallow } from 'enzyme';


describe('SORT TESTS', () => {
  it('should match the snapshot if there is no user id', () => {
    const wrapper = shallow(<Sort />, { disableLifecycleMethods: true });

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if there is a user id', () => {
    const wrapper = shallow(<Sort userId={1} />, { disableLifecycleMethods: true });

    expect(wrapper).toMatchSnapshot();
  });

  it.skip('should call update difficulty level with a argument of hard when handleVote is invoked', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve());
    const wrapper = shallow(<Sort userId={2} />, { disableLifecycleMethods: true });

    const spy = spyOn(wrapper.instance(), 'updateDifficultyLevel');
    wrapper.instance().setState({
      cards: [{id: 1}]
    });
    wrapper.instance().handleUpVote();

    expect(spy).toHaveBeenCalled();
  });

  it('updates state when getNewCard is called', () => {
    const wrapper = shallow(<Sort />, { disableLifecycleMethods: true });
    wrapper.setState({
      cards: [{connection: 1}, {connection: 2}]
    });
    wrapper.instance().getNewCard();
    const results = wrapper.instance().state.cards.length;
    expect(results).toEqual(1);
  });
});