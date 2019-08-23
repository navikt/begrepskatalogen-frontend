import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Enzyme, {shallow} from 'enzyme';
import OmBegrepskatalogen from '../pages/omBegrepskatalogen/OmBegrepskatalogen';
import Adapter from 'enzyme-adapter-react-16';

const mockStore = configureMockStore();
const store = mockStore({});
Enzyme.configure({adapter: new Adapter()});

describe('omBegrepskatalogen', () => {

  it('matches the snapshot', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(
        <Provider store={store}>
          <OmBegrepskatalogen/>
        </Provider>,
    );
    expect(result).toMatchSnapshot();
  });

  describe('<OmBegrepskatalogen/>', () => {
    it('renders one <h1> tag', () => {
      const wrapper = shallow(<OmBegrepskatalogen/>);
      expect(wrapper.find('h1')).toHaveLength(1);
    });

    it('renders one <div> tag', () => {
      const wrapper = shallow(<OmBegrepskatalogen/>);
      expect(wrapper.find('div')).toHaveLength(1);
    });

    it('renders one <p> tag', () => {
      const wrapper = shallow(<OmBegrepskatalogen/>);
      expect(wrapper.find('p')).toHaveLength(1);
    });
  });

});

