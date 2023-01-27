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
        <span className="pr-2 inline-block">{ props.label }</span>
        { showErrors && <span className="text-[#FB2F2F] dark:text-[#FB2F2F text-sm">{fieldErrors}</span> }
      </label>
      <input {...field} {...props} />
    </div>
  )
}

export default ValidatedInput;
