import { groupEventsByMonth  } from 'utils/events';

describe('groupEventsByMonth', () => {
  it('returns an object with the correct keys and values', () => {
    const events = [
      {
        id: 1,
        eventName: 'Event 1',
        startDate: '2022-01-01',
        endDate: '2022-01-01',
        location: 'Location 1',
        description: 'Description 1',
      },
      {
        id: 2,
        eventName: 'Event 2',
        startDate: '2022-02-01',
        endDate: '2022-02-01',
        location: 'Location 2',
        description: 'Description 2',
      },
    ];
    const result = groupEventsByMonth(events);
    expect(result).toHaveProperty('January 2022');
    expect(result).toHaveProperty('February 2022');
    
    expect(result['January 2022']).toHaveLength(1);
    expect(result['February 2022']).toHaveLength(1);

    expect(result['January 2022'][0]).toHaveProperty('id', 1);
    expect(result['February 2022'][0]).toHaveProperty('id', 2);
  });
});