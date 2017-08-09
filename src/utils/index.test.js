import {expect} from 'chai'
import { getTime } from './index'

describe('getTime() receives a date as string and extract time from it', () => {
  it('2 hour digits and 2 minutes digits', () => {
    let date = "Wed Aug 09 2017 11:33:20 GMT-0300 (BRT)"
    expect(getTime(date)).to.equal("11:33");
  })
  it('1 hour digits and 2 minutes digits', () => {
    let date = "Wed Aug 09 2017 01:33:20 GMT-0300 (BRT)"
    expect(getTime(date)).to.equal("01:33");
  })
  it('2 hour digits and 1 minutes digits', () => {
    let date = "Wed Aug 09 2017 11:03:20 GMT-0300 (BRT)"
    expect(getTime(date)).to.equal("11:03");
  })
  it('1 hour digits and 1 minutes digits', () => {
    let date = "Wed Aug 09 2017 01:03:20 GMT-0300 (BRT)"
    expect(getTime(date)).to.equal("01:03");
  })
})
