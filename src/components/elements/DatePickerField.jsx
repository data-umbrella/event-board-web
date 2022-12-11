import React from 'react';
import { useFormikContext, useField } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerField = ({ ...props }) => {
  const context= useFormikContext();
  const { setFieldValue, touched, errors } = useFormikContext();
  const [field, form, { setTouched }] = useField(props);

  const fieldTouched = touched[field.name];
  const fieldErrors = errors[field.name];
  const showErrors = fieldTouched && fieldErrors;

  return (
    <div>
      <label htmlFor={props.name}>
        <span className="pr-2 inline-block">{ props.label }</span>
        { showErrors && <span className="text-[#FB2F2F] dark:text-[#FB2F2F]">{fieldErrors}</span> }
      </label>

      <DatePicker
        id={props.name}
        {...field}
        {...props}
        placeholderText={new Date().toLocaleDateString()}
        selected={(field.value && new Date(field.value)) || ''}
        onChange={(val) => {
          setFieldValue(field.name, val);
          setTouched(true, true);
        }}
      />
    </div>
  );
};

export default DatePickerField;
