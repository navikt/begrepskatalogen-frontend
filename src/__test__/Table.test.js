import React from 'react';
import { shallow } from "enzyme";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import ShallowRenderer from 'react-test-renderer/shallow';

import { Provider } from 'react-redux';

import { Table } from '../components/table/Table';

Enzyme.configure({adapter: new Adapter()});



const mockStore = configureStore();


describe('Table', ()=>{
    it('should render self and subcomponents', ()=>{
        const renderer = new ShallowRenderer();
        const result = renderer.render(
            <Provider>
                <Table store = {mockStore}/>
            </Provider>
        )
        expect(result.find('div')).toHaveLength(3);
    });
})


