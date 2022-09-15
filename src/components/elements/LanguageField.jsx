import React from 'react';
import { Field } from 'formik';
import { LANGUAGE_OPTIONS } from 'constants/languages';
import formStyleClasses from 'styles/forms';

function LanguageField() {
  return (
    <>
      <label>Language</label>
      <Field name="language" component="select" className={`${formStyleClasses.select} col-span-1 dark:bg-[#151A35]`}>
        <option>All</option>
        { LANGUAGE_OPTIONS.map(({ value, label }) => {
          return <option key={value} value={value}>{ label }</option>
        })}
      </Field>
    </>
  )
}

export default LanguageField;
