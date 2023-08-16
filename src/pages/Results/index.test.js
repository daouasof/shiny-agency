import { formatJobList, formatQueryParams } from '.'

describe('formatJobList funciton', () => {
  it('should return a word followed by a comma', () => {
    expect(formatJobList('item2', 2, 3)).toEqual('item2,')
  })

  it('should return a word without a comma', () => {
    expect(formatJobList('item3', 4, 3)).toEqual('item3')
  })
})

describe('formatQueryParams function', () => {
  it('should return the right format for 6 answers', () => {
    const answers = { 1: true, 2: true, 3: false, 4: false, 5: true, 6: true }
    expect(formatQueryParams(answers)).toEqual(
      'a1=true&a2=true&a3=false&a4=false&a5=true&a6=true',
    )
  })
  it('should return the right format for 1 answers', () => {
    const answers = { 3: false }
    expect(formatQueryParams(answers)).toEqual('a3=false')
  })
})
