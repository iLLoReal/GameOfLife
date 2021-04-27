import React from 'react';
import ReactDOM from 'react-dom'
import Adapter from 'enzyme-adapter-react-17-updated';

import App from '../components/App';
import Enzyme, { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() })

const wrapper = shallow(<App />);

describe('(Component) App', () => {
 
  it('renders without exploding', () => {
    expect(wrapper).toHaveLength(1);
  });
})
describe('(Component) App', () => {
 
  it('renders "Basic component"', () => {
    expect(wrapper.text() === ("basic component")).toBe(true);
  });
})
