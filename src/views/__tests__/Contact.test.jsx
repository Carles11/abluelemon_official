import React from 'react';
import { shallow } from 'enzyme';
import Contact from '../Contact';

describe('<Contact />', () => {
  it('should render itself', () => {
    const component = shallow(<Contact />);
    expect(component).toMatchSnapshot();
  });
});
