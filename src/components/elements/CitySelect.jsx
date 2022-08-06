import React from 'react';
import { Field } from 'formik';
import usStates from 'constants/us-states';
import formStyleClasses from 'styles/forms';

function CitySelect () {
  return (
    <div className="grid grid-cols-4 gap-6">
      <div className="col-span-2">
        <label>City</label>
        <Field
          name="city"
          type="text"
          className={formStyleClasses.input}
        />
      </div>

      <div className="col-span-2">
        <label>State</label>
        <Field name="state" component="select" className={formStyleClasses.select}>
          <option value={null}>Select a state</option>
          {usStates.map(({ name, abbreviation }) => {
            return <option key={abbreviation} value={abbreviation}>{name}</option>
          })}
        </Field>
      </div>
    </div>
  )
}

export default CitySelect;
