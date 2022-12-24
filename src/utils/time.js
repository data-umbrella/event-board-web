import soft from 'timezone-soft'

export function formatTimezone(timezone) {
  if (!timezone) return '';

  const softTimezone = soft(timezone)[0]

  return softTimezone ? softTimezone.standard.abbr : timezone
}

export function formatEventTimeFrame(evt) {
  if (!evt.startTime) return

  const formattedTimezone = formatTimezone(evt.timezone)

  if (!evt.endTime) return `${evt.startTime} ${formattedTimezone}`

  return `${evt.startTime} - ${evt.endTime} ${formattedTimezone}`
}
