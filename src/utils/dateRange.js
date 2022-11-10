
export function DateRange(event) {
  const dateStart = event.start.split(' ')[0]
  const dateEnd = event.end.split(' ')[0]

  if(dateStart === dateEnd) {
    // eslint-disable-next-line react/react-in-jsx-scope
    return <p className="truncate">{event.start.slice(0, -6) + ' - ' + event.end.substring(event.end.indexOf(' ') + 1)}</p>
  }
  // eslint-disable-next-line react/react-in-jsx-scope
  return <p className="truncate">{event.start + ' - ' + event.end}</p>
}
