
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import App from '../App';

const mockStore = configureMockStore();
const store = mockStore({});

describe('App', ()=>{
    it('matches snapshot', ()=>{
        const renderer = new ShallowRenderer();
        const result = renderer.render(
            <Provider store = {store}>
                <App />
            </Provider>
        )
        expect(result).toMatchSnapshot();
    });
})