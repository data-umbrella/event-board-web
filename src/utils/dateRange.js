export function DateRange(event) {
  event.start.slice(0, -6) + ' - ' + event.end.substring(event.end.indexOf(' ') + 1)
}
