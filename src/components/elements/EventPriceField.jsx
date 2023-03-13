import React from 'react';
import { Field } from 'formik';
import { EVENT_PRICES } from 'constants/events';
import formStyleClasses from 'styles/forms';

function EventPriceField () {
  return (
    <div>
      <label>Event Price</label>
      <Field name="price" component="select" className={`${formStyleClasses.select} dark:bg-[#151A35]`}>
        { EVENT_PRICES.map(({ value, label }) => {
          return <option key={value} value={value}>{ label }</option>
        })}
      </Field>
    </div>
  )
}

export default EventPriceField;
