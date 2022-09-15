import React from 'react';
import { Field } from 'formik';
import { REGION_OPTIONS } from 'constants/events';
import formStyleClasses from 'styles/forms';

function RegionField() {
  return (
    <>
      <label>Region</label>
      <Field name="region" component="select" className={`${formStyleClasses.select} dark:bg-[#151A35]`}>
        { REGION_OPTIONS.map(({ value, label }) => {
          return <option key={value} value={value}>{ label }</option>
        })}
      </Field>
    </>
  )
}

export default RegionField;
