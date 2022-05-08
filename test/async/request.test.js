import { TestScheduler } from 'jest'
import { fetchData } from '../../fetch'

test('', () => {
  fetchData(data => {
    expect(data).toEqual({
      success: true
    })
  })
})