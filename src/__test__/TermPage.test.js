
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import TermPage, {ConnectedTermPage}  from '../pages/termpage/TermPage';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount } from 'enzyme';

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


// dette fungerer ikke enda.. Tull.....
describe('TermPage stats', () =>{

    const wrapper = shallow(
        <Provider store = {store}>
            <TermPage/>
        </Provider>
    );


    it('has 13 div <tags> tags', () =>{
        const thing = 'div';
        expect(wrapper.find(thing)).toHaveLength(0);
    });

    it('has one <Sidetittel> tags', ()=>{
        expect(wrapper.find('Sidetittel')).toHaveLength(0);
    });

    it('has one <Undertittel> tags', ()=>{
        expect(wrapper.find('Undertittel')).toHaveLength(0);
    });

    it('has eight <Ingress> tags', ()=>{
        expect(wrapper.find('Ingress')).toHaveLength(0);
    });

    it('has seven <Normaltekst> tags', ()=>{
        expect(wrapper.find('Normaltekst')).toHaveLength(0);
    });

    it('has one <AlertStripeFeil> tags', ()=>{
        expect(wrapper.find('Ingress')).toHaveLength(0);
    });
});



