import React from 'react';
import ShallowRenderer from "react-test-renderer/shallow";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import SearchBar from "../components/SearchBar/SearchBar";


const mockStore = configureMockStore();
const store = mockStore({});

describe('test to see if it matches snapshot', ()=>{

    it('matches the snapshot', ()=>{
        const renderer = new ShallowRenderer();
        const result = renderer.render(
            <Provider store={store}>
                <SearchBar/>
            </Provider>
            );
        expect(result).toMatchSnapshot();
    });
})