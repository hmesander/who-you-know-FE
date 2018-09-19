/*eslint-disable no-undef, camelcase*/

import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

describe('CARD TESTS', () => {
  it('should match the snapshot with cards to sort', () => {
    const mockCards = [{first_last_name: 'John Doe', job_title: 'Developer', school: 'CU'}];
    const wrapper = shallow(<Card cardsToSort={mockCards} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot without cards to sort', () => {
    const mockCards = [];
    const wrapper = shallow(<Card cardsToSort={mockCards} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleVote when the upvote button is clicked', () => {
    const mockVote = jest.fn();
    const mockCards = [{ first_last_name: 'John Doe', job_title: 'Developer', school: 'CU' }];
    const wrapper = shallow(<Card cardsToSort={mockCards} handleVote={mockVote}/>);

    const button = wrapper.find('.upvote');
    button.simulate('click');
    expect(mockVote).toHaveBeenCalled();  
  });

  it('should call handleVote when the middle vote button is clicked', () => {
    const mockVote = jest.fn();
    const mockCards = [{ first_last_name: 'John Doe', job_title: 'Developer', school: 'CU' }];
    const wrapper = shallow(<Card cardsToSort={mockCards} handleVote={mockVote} />);

    const button = wrapper.find('.middlevote');
    button.simulate('click');
    expect(mockVote).toHaveBeenCalled();
  });

  it('should call handleVote when the down vote button is clicked', () => {
    const mockVote = jest.fn();
    const mockCards = [{ first_last_name: 'John Doe', job_title: 'Developer', school: 'CU' }];
    const wrapper = shallow(<Card cardsToSort={mockCards} handleVote={mockVote} />);

    const button = wrapper.find('.downvote');
    button.simulate('click');
    expect(mockVote).toHaveBeenCalled();
  });
});