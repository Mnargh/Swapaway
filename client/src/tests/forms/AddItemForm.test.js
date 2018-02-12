import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import AddItemForm from './components/forms/AddItemForm';
var form = require('./components/forms/AddItemForm');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddItemForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe ('testing AddItemForm component', () => {
  let wrapper;

  beforeEach(() => {
    // This fills in form components
    component.find('name').node.value = 'Red paperclip';
    component.find('picture').node.value = 'Picture needed';
    component.find('description').node.value = 'Brand new metal paper clip';
    // This submits the "form"
    component.find('Button').simulate('submit', { preventDefault: jest.fn() });
  });

  afterEach(() => {
  });

  it('', () => {
    expect().toEqual(App);
  });
