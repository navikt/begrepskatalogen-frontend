import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';

import Header from '../composition/header/Header';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('Header component', () => {
  it('has one systemtittel component ', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find('Systemtittel')).toHaveLength(1);

  });

  it('has one navigation component', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find('Navigation')).toHaveLength(1);
  });

  it('has one navLink component', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find('NavLink')).toHaveLength(1);
  });

  /*it('has one searchBar component', ()=>{
      const wrapper = shallow(<Header/>);
      expect(wrapper.find('SearchBar')).toHaveLength(1);
  });
  ^^^^^^^^^Should work!!
  */

  it('has three div components', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find('div')).toHaveLength(3);
  });

  it('has one svg tag', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find('svg')).toHaveLength(1);
  });

  it('Render of headercomponent should match snapshot', () => {
    const renderer = new ShallowRenderer();
    const result = renderer.render(<Header/>);
    expect(result).toMatchSnapshot();
  });

  it('Header renders without crashing', () => {
    shallow(<Header/>);
  });

});
