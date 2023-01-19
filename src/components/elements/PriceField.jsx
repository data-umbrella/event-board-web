import React from 'react';
import { Field } from 'formik';
import formStyleClasses from 'styles/forms';
import { PRICE_OPTIONS } from 'constants/prices';

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
