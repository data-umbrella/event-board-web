import React from 'react';

const styleClasses = {
  link: 'text-blue-600 underline underline-offset-2',
}

function EventPlanningDetail({ label, value, type }) {
  if (!value || value === undefined) return

  const formattedValue = type === 'link'
    ? <a className={styleClasses.link} href={value}>{ value }</a>
    : value

  return (
    <div className="mb-1">
      <b>{ label }</b> : { formattedValue }
    </div>
  )
}

export default EventPlanningDetail;
