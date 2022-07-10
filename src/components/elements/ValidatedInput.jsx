function ValidatedInput({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) {
  const fieldTouched = errors[field.name];
  const fieldErrors = touched[field.name];
  const showErrors = fieldTouched && fieldErrors;

  return (
   <div>
     <label>
       <span className="pr-2">{ props.label }</span>
       { showErrors && <div className="text-red-600">{fieldErrors}</div> }
     </label>
     <input {...field} {...props} />
   </div>
  )
}

export default ValidatedInput;
