import moment from 'moment';

export function formatEventDetail(date) {
  if (!date) return;

  return moment(date).format('MMMM D, YYYY');
}
