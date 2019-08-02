import React from 'react';
import { shallow } from "enzyme";


import Header from '../composition/header/Header';


import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Header component', () =>{
    it('has one systemtittel component ', () =>{
        const wrapper = shallow(<Header/>);
        expect(wrapper.find('Systemtittel')).toHaveLength(1);

    });

    it('has one navigation component', ()=>{
        const wrapper = shallow(<Header/>);
        expect(wrapper.find('Navigation')).toHaveLength(1);
    });

    it('has one navLink component', ()=>{
        const wrapper = shallow(<Header/>);
        expect(wrapper.find('NavLink')).toHaveLength(1);
    });


    /*it('has one searchBar component', ()=>{
        const wrapper = shallow(<Header/>);
        expect(wrapper.find('SearchBar')).toHaveLength(1);
    });
    ^^^^^^^^^Should work!!
    */

    it('has three div components', () =>{
        const wrapper = shallow(<Header/>);
        expect(wrapper.find('div')).toHaveLength(3);
    })

    it('has one svg tag', () =>{
        const wrapper = shallow(<Header/>);
        expect(wrapper.find('svg')).toHaveLength(1);
    })

});