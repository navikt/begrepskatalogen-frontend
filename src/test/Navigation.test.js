import React from 'react';
import Navigation from '../components/navigation/Navigation';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { Link } from 'react-router-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Element } from 'nav-frontend-typografi';

Enzyme.configure({ adapter: new Adapter() });

describe('<Navigation />', () =>{
    it('renders three <Link/> elements', () =>{
        const wrapper = shallow(<Navigation/>);
        expect(wrapper.find(Link)).to.have.lengthOf(3);
    });

    it('clicks "om begrepskatalogen" button', () =>{
        const wrapper = shallow(<Navigation/>);
        const knapp = wrapper.find('#omBegrepeskatalog');
        knapp.simulate('click');
        //trenger en expect greie her

    })

    it('clicks "kontaktOss" button', () =>{
        const wrapper = shallow(<Navigation/>);
        const knapp = wrapper.find('#kontaktOss');
        knapp.simulate('click');
        //trenger en expect greie her

    })

    it('clicks "om begrepskatalogen" button', () =>{
        const wrapper = shallow(<Navigation/>);
        const knapp = wrapper.find('#meldInnNyttBegrep');
        knapp.simulate('click');

        //trenger en expect greie her

    })

});