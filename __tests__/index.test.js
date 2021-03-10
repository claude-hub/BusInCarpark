import { sum } from '../src/test'

describe('sum', () => {
  it('test add', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
