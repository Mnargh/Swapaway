import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App';
var app = require('./App');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe ('testing App component', () => {
  let wrapper;

  const mockResponse = (status, statusText, response) => {
    return new window.Response(response, {
      status: status,
      statusText: statusText,
      headers: {
      'Content-type': 'application/json'
      }
    });
  };

  window.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve(mockResponse(200, null, '[{"name":"Tom"}]')));

  beforeEach(() => {
    wrapper = mount(<App  />);
  });

  afterEach(() => {
    window.fetch.mockRestore();
  });


  it('App renders as an App', () => {
    expect(wrapper.type()).toEqual(App);
  });

  it('Shows the text from the request', () => {
    expect(wrapper.state()).toEqual({ users: [{"name":"Tom"}]});
  });

  it('Renders in the correct way, given a state', () => {
    wrapper.setState({ users: [{"name": "Charles"}]});
    expect(wrapper.text()).toEqual('UsersCharles');
  });
});
