/*eslint-disable no-undef*/

import React from 'react';
import { App } from './App';
import { shallow } from 'enzyme';


describe('APP TESTS', () => {
  it('matches the snapshot', () => {
    const wrapper = shallow(<App history={''} />, { disableLifecycleMethods: true });

    expect(wrapper).toMatchSnapshot();
  });

  it('should display a login button if the user is not logged in', () => {
    const wrapper = shallow(<App history={''}/>, { disableLifecycleMethods: true });
    
    expect(wrapper.find('.login-button').length).toEqual(1);
  });

  it('should display a logout button if the user is logged in', () => {
    const wrapper = shallow(<App />, { disableLifecycleMethods: true });
    wrapper.instance().setState({hash: 'taco'});
    
    expect(wrapper.find('.logout-button').length).toEqual(1);
  });

  it('calls the login function when a user clicks the login button', () => {
    const wrapper = shallow(<App />, { disableLifecycleMethods: true });
    const spy = spyOn(wrapper.instance(), 'handleLogin');
    wrapper.instance().forceUpdate();

    wrapper.find('.login-button').simulate('click');

    expect(spy).toHaveBeenCalled();
  });

  it('should call the logout function when a user clicks the logout button', () => {
    const wrapper = shallow(<App />, { disableLifecycleMethods: true });
    wrapper.instance().setState({ hash: 'taco' });
    const spy = spyOn(wrapper.instance(), 'handleLogout');
    wrapper.instance().forceUpdate();

    wrapper.find('.logout-button').simulate('click');

    expect(spy).toHaveBeenCalled();
  });

  it('should reset hash in state to an empty string when handleLogout is called', () => {
    const wrapper = shallow(<App history={[]}/>, { disableLifecycleMethods: true });
    wrapper.instance().setState({
      hash: 'taco'
    });
    wrapper.instance().handleLogout();

    expect(wrapper.instance().state.hash).toEqual('');
  });

  it('should push the history object to sort when handleLogout is called', () => {
    const wrapper = shallow(<App history={[]} />, { disableLifecycleMethods: true });
    wrapper.instance().setState({
      hash: 'taco'
    });
    wrapper.instance().handleLogout();

    expect(wrapper.instance().props.history).toEqual(['/']);
  });

  it('should parse a url and returns an object with the tokens when parseUrl is called', () => {
    const wrapper = shallow(<App />, { disableLifecycleMethods: true });
    const mockUnparsedURL = '#access_token=taco&expires_in=7200&token_type=Bearer&state=cheeseburgers&id_token=123456789';
    wrapper.setState({hash: mockUnparsedURL});
    const results = wrapper.instance().parseURL(mockUnparsedURL);

    expect(results.accessToken).toEqual('taco');
    expect(results.idToken).toEqual('123456789');
  });

  it('should push the history object to sort when handleSort is called', () => {
    const wrapper = shallow(<App history={[]} />, { disableLifecycleMethods: true });
    wrapper.instance().handleSort();
    expect(wrapper.instance().props.history).toEqual(['/sort']);
  });

  it('should push the history object to play when handlePlayDeck is called', () => {
    const wrapper = shallow(<App history={[]} />, { disableLifecycleMethods: true });
    wrapper.instance().handlePlayDeck();
    expect(wrapper.instance().props.history).toEqual(['/play']);
  });
});