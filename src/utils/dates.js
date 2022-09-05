import moment from 'moment';

export function formatEventDetail(date) {
  if (!date) return;

  return moment(date).format('MMMM D, YYYY');
}

export function sortByDate(a, b) {
  return moment(a.startDate).isBefore(moment(b.startDate)) ? -1 : 1;
}
