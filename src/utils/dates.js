import moment from 'moment';

export function formatEventDetail(date) {
  if (!date) return;

  return moment(date).format('MMMM D, YYYY');
}

export function sortByDate(a, b) {
  return moment(a.startDate).isBefore(moment(b.startDate)) ? -1 : 1;
}

export function formatDateRangeFromEvent(event) {
  if(!event.start || !event.end) return ''
  return event.start.slice(0, -6) + ' - ' + event.end.substring(event.end.indexOf(' ') + 1)
}
