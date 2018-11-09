// eslint-disable-next-line
import env from '../index'

describe('Tests work as expected', () => {
  it('should return the current config environment', () => {
    expect(env()).toEqual('testing')
  })
})
