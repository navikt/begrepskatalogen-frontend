import React from 'react';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import configureStore from 'redux-mock-store';
import ShallowRenderer from 'react-test-renderer/shallow';

import {Provider} from 'react-redux';

import {Table} from '../components/table/Table';

Enzyme.configure({adapter: new Adapter()});

const mockStore = configureStore();
const store = mockStore();

describe('Table', () => {
  it('matches snapshot', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(
        <Provider store={store}>
          <Table/>
        </Provider>,
    );
    expect(result).toMatchSnapshot();
  });

  /*it('renders x div tags', () =>{
      const wrapper = shallow(
          <Provider store = {store}>
              <Table/>
          </Provider>
      )

      expect(wrapper.find('div')).toHaveLength(3)
  })*/

});
