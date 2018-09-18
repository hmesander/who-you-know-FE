import React from 'react';
import Sort from './Sort';
import { shallow } from 'enzyme';


describe('SORT TESTS', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Sort />, { disableLifecycleMethods: true });

    expect(wrapper).toMatchSnapshot();
  });

  // it('should call update difficulty level with a argument of hard when handleUpVote is invoked', () => {
  //   const wrapper = shallow(<Sort userId={2}/>, { disableLifecycleMethods: true });
  //   window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
  //     json: () => Promise.resolve({
  //       message: 'Success'
  //     })
  //   }));
  //   const spy = spyOn(wrapper.instance(), 'updateDifficultyLevel');
  //   wrapper.instance().setState({
  //     cards: [{id: 1}]
  //   });
  //   wrapper.instance().handleUpVote();

  //   expect(spy).toHaveBeenCalled();
  // });
});