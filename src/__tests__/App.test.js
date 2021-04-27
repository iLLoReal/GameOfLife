import React from 'react';
import ReactDOM from 'react-dom'
import Adapter from 'enzyme-adapter-react-17-updated';
import App from '../components/App';
import Map from '../components/Map';
import Enzyme, { shallow } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() })

describe('(Component) App', () => {
  const AppWrapper = shallow(<App />);

  it('renders without exploding', () => {
    expect(AppWrapper).toHaveLength(1);
  })
  it ('displays "Basic component"', () => {
    expect(AppWrapper.text() === 'Basic component').toBe(true);
  })
});

describe('(Component) Map', () => {
  const MapWrapper = shallow(<Map />);

  it('renders without exploding', () => {
    expect(MapWrapper).toHaveLength(1);
  })
});