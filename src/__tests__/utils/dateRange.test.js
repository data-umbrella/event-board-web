import { formatDateRangeFromEvent } from 'utils/dates'

describe('formatDateRangeFromEvent', () => {
  it('returns a correctly formatted date range', () => {
    const event = 
      {
        start: 'September 7, 2022',
        end: 'September 12, 2022'
      }

    const result = formatDateRangeFromEvent(event)
    expect(result).toMatch('September 7 - 12, 2022')
  })

  it('returns an empty string when start and end date are null', () => {
    const event = 
      {
        start: null,
        end: null
      }

    const result = formatDateRangeFromEvent(event)
    expect(result).toMatch('')
  })
})
