import moment from 'moment';

// TODO: Refactor to use dayjs.
export function formatDate(date) {
  if (!date || date === '') return '';

  return moment(date).format('YYYY-MM-DD');
}

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
