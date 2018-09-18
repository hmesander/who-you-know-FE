import React from 'react';
import ReactDOM from 'react-dom';
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

  it('should call handleUpVote when the upvote button is clicked', () => {
    const mockUpVote = jest.fn();
    const mockCards = [{ first_last_name: 'John Doe', job_title: 'Developer', school: 'CU' }];
    const wrapper = shallow(<Card cardsToSort={mockCards} handleUpVote={mockUpVote}/>);

    const button = wrapper.find('.upvote');
    button.simulate('click');
    expect(mockUpVote).toHaveBeenCalled();  
  });

  it('should call handleMiddleVote when the middle vote button is clicked', () => {
    const mockMiddleVote = jest.fn();
    const mockCards = [{ first_last_name: 'John Doe', job_title: 'Developer', school: 'CU' }];
    const wrapper = shallow(<Card cardsToSort={mockCards} handleMiddleVote={mockMiddleVote} />);

    const button = wrapper.find('.middlevote');
    button.simulate('click');
    expect(mockMiddleVote).toHaveBeenCalled();
  });

  it('should call handleDownVote when the down vote button is clicked', () => {
    const mockDownVote = jest.fn();
    const mockCards = [{ first_last_name: 'John Doe', job_title: 'Developer', school: 'CU' }];
    const wrapper = shallow(<Card cardsToSort={mockCards} handleDownVote={mockDownVote} />);

    const button = wrapper.find('.downvote');
    button.simulate('click');
    expect(mockDownVote).toHaveBeenCalled();
  });
});