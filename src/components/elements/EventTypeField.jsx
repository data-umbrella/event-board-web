import React from 'react';
import { Field } from 'formik';
import { EVENT_TYPES } from 'constants/events';
import formStyleClasses from 'styles/forms';

function EventTypeField () {
  return (
    <>
      <label>Event Type</label>
      <Field name="eventType" component="select" className={`${formStyleClasses.select} dark:bg-[#151A35]`}>
        <option>All</option>
        { EVENT_TYPES.map(({ value, label }) => {
          return <option key={value} value={value}>{ label }</option>
        })}
      </Field>
    </>
  )
}

export default EventTypeField;
