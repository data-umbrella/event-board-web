import moment from 'moment';

export function groupEventsByMonth(events) {
  const newObj = events.reduce(function (acc, evt) {
    const month = moment(evt.startDate).format('MMMM YYYY');

    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(evt);

    return acc;
  }, {});
  return newObj;
}

export function formatEventsForCalendar(events) {
  return events.map(evt => {
    return {
      id: evt.id,
      start: evt.startDate,
      end: evt.endDate,
      title: evt.eventName,
      type: evt.eventType,
      description: evt.description
    };
  });
}

export function eventTimeSort(a, b) {
  if (moment(a.startDate).isBefore(moment(b.startDate))) {
    return -1;
  }
  if (moment(a.startDate).isAfter(moment(b.startDate))) {
    return 1;
  }
  return 0;
}
