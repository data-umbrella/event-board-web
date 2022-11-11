import React from 'react';

function ValidatedTextArea({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) {
  const fieldTouched = touched[field.name];
  const fieldErrors = errors[field.name];
  const showErrors = fieldTouched && fieldErrors;

  return (
    <div>
      <label htmlFor={props.id}>
        <span className="pr-2">{ props.label }</span>
        { showErrors && <span className="inline-block text-red-600 dark:text-red-600">{fieldErrors}</span> }
      </label>
      <textarea {...field} {...props} />
    </div>
  )
}

export default ValidatedTextArea;
