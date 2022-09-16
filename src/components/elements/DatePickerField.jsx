import React from 'react';
import { useFormikContext, useField } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);

  return (
    <div>
      <label htmlFor={props.name}>{ props.label }</label>
      <DatePicker
        {...field}
        {...props}
        selected={(field.value && new Date(field.value))}
        onChange={(val) => {
          setFieldValue(field.name, val);
        }}
      />
    </div>
  );
};

export default DatePickerField;
