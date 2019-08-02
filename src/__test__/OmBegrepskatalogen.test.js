import React from 'react';
import ShallowRenderer from "react-test-renderer/shallow";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import OmBegrepskatalogen from '../pages/omBegrepskatalogen/OmBegrepskatalogen';


const mockStore = configureMockStore();
const store = mockStore({});

describe('omBegrepskatalogen', ()=>{

    it('matches the snapshot', ()=>{
        const renderer = new ShallowRenderer();
        const result = renderer.render(
            <Provider store={store}>
                <OmBegrepskatalogen/>
            </Provider>
            );
        expect(result).toMatchSnapshot();
    });
})