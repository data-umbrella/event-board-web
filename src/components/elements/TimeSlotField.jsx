import React from 'react';
import { Field } from 'formik';
import timeSlots from 'constants/time-slots';
import formStyleClasses from 'styles/forms';

function TimeSlotField (props) {
  return (
    <>
      <label htmlFor={props.id}>{props.label}</label>
      <Field
        id={props.id}
        name={props.name}
        component="select"
        className={formStyleClasses.select}
      >
        <>
          <option value=""></option>
          {timeSlots.map(timeSlot => {
            return <option key={timeSlot} value={timeSlot}>{ timeSlot }</option>
          })}
        </>
      </Field>
    </>
  )
}

export default TimeSlotField;
