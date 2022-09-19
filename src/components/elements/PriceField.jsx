import React from 'react';
import { Field } from 'formik';
import formStyleClasses from 'styles/forms';

const PRICE_OPTIONS = [
  { label: 'All', value: '' },
  { label: 'Free', value: 'free' },
  { label: 'Paid', value: 'paid' },
]

function PriceField () {
  return (
    <div>
      <label>Price</label>
      <Field name="price" component="select" className={`${formStyleClasses.select} dark:bg-[#151A35]`}>
        { PRICE_OPTIONS.map(({ value, label }) => {
          return <option key={value} value={value}>{ label }</option>
        })}
      </Field>
    </div>
  )
}

export default PriceField;
