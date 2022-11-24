import React from 'react';
import { Field } from 'formik';
import { TOPIC_OPTIONS } from 'constants/events';
import formStyleClasses from 'styles/forms';

function EventTopicField () {
  return (
    <div>
      <label>Topics</label>
      <Field name="topic" component="select" className={`${formStyleClasses.select}  dark:bg-[#151A35]`}>
        { TOPIC_OPTIONS.map(({ value, label }) => {
          return <option key={value} value={value}>{ label }</option>
        })}
      </Field>
    </div>
  )
}

export default EventTopicField;
