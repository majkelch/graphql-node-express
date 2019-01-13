const resolver = require('../resolver')
const schema = require('../schema')

describe('Server tests', () => {
  it('should have resolver object', () => {
    expect(typeof resolver).toBe('object')
  })
  it('should have schema object', () => {
    expect(typeof schema).toBe('object')
  })
})