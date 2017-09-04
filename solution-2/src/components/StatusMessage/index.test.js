import React from 'react';
import { shallow } from 'enzyme';
import StatusMessage from '../StatusMessage';

let component;

describe('(Component) The Status Message', () => {
  describe('when not set', () => {
    beforeEach(() => {
      component = shallow(<StatusMessage />);
    });
    test('it doesn\'t display', () => {
      expect(component.html()).toBe(null);
    });
  });
  describe('when set to `error`', () => {
    beforeEach(() => {
      component = shallow(<StatusMessage error />);
    });
    test('it displays a `Error :(` message', () => {
      expect(component.text()).toBe('Error :(');
    });
  });
  describe('when set to `loading`', () => {
    beforeEach(() => {
      component = shallow(<StatusMessage loading />);
    });
    test('it displays a `loading...` message', () => {
      expect(component.text()).toBe('Loading...');
    });
  });
  describe('when set to `zeroFound`', () => {
    beforeEach(() => {
      component = shallow(<StatusMessage zeroFound />);
    });
    test('it displays a `not found` message', () => {
      expect(component.text()).toBe('not found');
    });
  });
});
