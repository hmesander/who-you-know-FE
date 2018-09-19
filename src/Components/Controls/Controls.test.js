/*eslint-disable no-undef*/

import React from 'react';
import Controls from './Controls';
import { shallow } from 'enzyme';


describe('CONTROLS TESTS', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Controls />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleSort when the sort cards button is clicked', () => {
    const mockHandleSort = jest.fn();
    const wrapper = shallow(<Controls handleSort={mockHandleSort}/>);
    const button = wrapper.find('.sort-cards-button');
    button.simulate('click');

    expect(mockHandleSort).toHaveBeenCalled();
  });

  it('should call handlePlay when the play cards button is clicked', () => {
    const mockHandlePlay = jest.fn();
    const wrapper = shallow(<Controls handlePlay={mockHandlePlay} />);
    const button = wrapper.find('.play-deck-button');
    button.simulate('click');

    expect(mockHandlePlay).toHaveBeenCalled();
  });
});