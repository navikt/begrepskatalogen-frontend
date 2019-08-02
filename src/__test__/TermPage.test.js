
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import TermPage from '../pages/termpage/TermPage';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({});

describe('TermPage', ()=>{
    it('matches snapshot', ()=>{
        const renderer = new ShallowRenderer();
        const result = renderer.render(
            <Provider store = {store}>
                <TermPage />
            </Provider>
        )
        expect(result).toMatchSnapshot();
    });
})

