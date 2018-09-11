import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';


describe('APP TESTS', () => {
  it('displays a login button if the user is not logged in', () => {
    const wrapper = shallow(<App history={''}/>, { disableLifecycleMethods: true });
    
    expect(wrapper.find('.login').length).toEqual(1);
  })

  it('displays a logout button if the user is logged in', () => {
    const wrapper = shallow(<App/>, { disableLifecycleMethods: true });
    wrapper.instance().setState({hash: 'taco'})
    
    expect(wrapper.find('.logout').length).toEqual(1);
  })
})