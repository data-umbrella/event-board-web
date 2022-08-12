import React from 'react';
import { Field } from 'formik';
import formStyleClasses from 'styles/forms';

const PRICE_OPTIONS = [
  { label: 'Free', value: '0' },
  { label: '$1-$9', value: '1-10' },
  { label: '$10-$20', value: '1-20' },
  { label: '$20-$50', value: '20-50' },
  { label: '$50-$100', value: '50-100' },
]

function PriceField () {
  return (
    <>
      <label>Price</label>
      <Field name="price" component="select" className={formStyleClasses.select}>
        <option>All</option>
        { PRICE_OPTIONS.map(({ value, label }) => {
          return <option key={value} value={value}>{ label }</option>
        })}
      </Field>
    </>
  )
}

export default PriceField;
