import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';


describe('searchbar', () =>{
    it("should match snapshot", ()=>{
        const renderer = new ShallowRenderer();
        const result = renderer.render(<SearchBar/>);
        expect(result).toMatchSnapshot();
    }

    )
});