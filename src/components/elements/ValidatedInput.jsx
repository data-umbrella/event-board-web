import React from 'react';

function ValidatedInput({
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
        <span className="inline-block pr-2">{ props.label }</span>
        { showErrors && <span className="text-red-600">{fieldErrors}</span> }
      </label>
      <input {...field} {...props} />
    </div>
  )
}

export default ValidatedInput;
