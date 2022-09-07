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
