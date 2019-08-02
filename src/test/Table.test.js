import React from 'react';
import { shallow } from "enzyme";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import configureMockStore from 'react-redux';

import { Provider } from 'react-redux';

import { Table } from '../components/table/Table';

Enzyme.configure({adapter: new Adapter()});

function setup(){
    const props = {
        tableItems: jest.fn()
    }

    const enzymeWrapper = shallow(<Table {...props}/>)

    return {
        props,
        enzymeWrapper
    }
}

describe('components', () =>{
    describe('Table', ()=>{
        it('should render self and subcomponents', ()=>{
            const { enzymeWrapper } = setup();
            expect(enzymeWrapper.find('SortField')).hasClass('selectfields').toBe(true);
        });
    })
})

