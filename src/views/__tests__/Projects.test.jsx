import React from 'react'
import { shallow } from 'enzyme'
import Projects from '../Projects'

describe('<Projects />', () => {
  it('should render itself', () => {
    const component = shallow(<Projects />)
    expect(component).toMatchSnapshot()
  })
}) 