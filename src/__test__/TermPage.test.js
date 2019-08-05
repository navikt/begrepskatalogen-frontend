
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import TermPage from '../pages/termpage/TermPage';
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
// dette fungerer ikke enda.. 
describe('TermPage stats', () =>{
    //const renderer = new ShallowRenderer();
    const wrapper = shallow(
        <Provider store = {store}>
            <TermPage/>
        </Provider>
    );
    it('has 13 div <tags> tags', () =>{

        expect(wrapper.find('div')).toHaveLength(13);
    });

    it('has one <Sidetittel> tags', ()=>{
        expect(wrapper.find('Sidetittel')).toHaveLength(1);
    });

    it('has one <Undertittel> tags', ()=>{
        expect(wrapper.find('Undertittel')).toHaveLength(1);
    });

    it('has eight <Ingress> tags', ()=>{
        expect(wrapper.find('Ingress')).toHaveLength(1);
    });

    it('has seven <Normaltekst> tags', ()=>{
        expect(wrapper.find('Normaltekst')).toHaveLength(1);
    });

    it('has one <AlertStripeFeil> tags', ()=>{
        expect(wrapper.find('Ingress')).toHaveLength(1);
    });
});



