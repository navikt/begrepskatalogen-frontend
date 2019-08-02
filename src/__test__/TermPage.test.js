
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import TermPage from '../pages/termpage/TermPage';
Enzyme.configure({ adapter: new Adapter() });
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

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
/*
describe('<TermPage/>', () => {
    it('renders one <h1> tag', ()=>{
        const wrapper = shallow(<OmBegrepskatalogen/>);
        expect(wrapper.find('h1')).toHaveLength(1);
    })

    it('renders one <div> tag', ()=>{
        const wrapper = shallow(<OmBegrepskatalogen/>);
        expect(wrapper.find('div')).toHaveLength(1);
    })
    
    it('renders one <p> tag', ()=>{
        const wrapper = shallow(<OmBegrepskatalogen/>);
        expect(wrapper.find('p')).toHaveLength(1);
    })
})*/