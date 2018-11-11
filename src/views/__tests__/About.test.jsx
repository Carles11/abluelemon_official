import React from 'react';
import { shallow } from 'enzyme';
import About from '../About';

describe('<About />', () => {
  it('should render itself', () => {
    const component = shallow(<About />);
    expect(component).toMatchSnapshot();
  });
});
