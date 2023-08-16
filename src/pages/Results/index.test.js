import { formatJobList } from '.'

describe('formatJobList funciton', () => {
  it('should return a word followed by a comma', () => {
    expect(formatJobList('item2', 2, 3)).toEqual('item2,')
  })

  it('should return a word without a comma', () => {
    expect(formatJobList('item3', 4, 3)).toEqual('item3')
  })
})
