import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import KontaktOss from './pages/kontaktoss/KontaktOss';

const mockStore = configureMockStore();

test('App component testing', function() {
  let store = mockStore({
    users: {},
  });
  const component = renderer.create(
      <Provider store={store}><KontaktOss/></Provider>,
  );
  const instance = component.root;
  const divs = instance.findByType('div');
  expect(divs.props.className).toBe('kontaktOss');
  expect(divs.props.children).toHaveLength(2);
});
