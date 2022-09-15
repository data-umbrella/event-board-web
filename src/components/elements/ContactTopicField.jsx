import React from 'react';
import { Field } from 'formik';
import { TOPIC_TYPES } from 'constants/events';
import formStyleClasses from 'styles/forms';

function ContactTopicField () {
  return (
    <>
      <Field name="topicType" component="select" className={`${formStyleClasses.select} border-black`}>
        { TOPIC_TYPES.map(({ value, label }) => {
          return <option key={value} value={value}>{ label }</option>
        })}
      </Field>
    </>
  )
}

export default ContactTopicField;
