export function formatEventTimeFrame(evt) {
  if (!evt.startTime) return
  if (!evt.endTime) return `${evt.startTime} ${evt.timeZone}`

  return `${evt.startTime} - ${evt.endTime} ${evt.timeZone}`
}
