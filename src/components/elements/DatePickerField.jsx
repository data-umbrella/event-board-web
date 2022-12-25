import React, { useState, useEffect } from 'react';
import { useFormikContext, useField } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

const DatePickerField = ({ ...props }) => {
  const [field] = useField(props);
  const { setFieldValue, touched, errors } = useFormikContext();
  const [dateValue, setDateValue] = useState(new Date());
  const fieldTouched = touched[field.name];
  const fieldErrors = errors[field.name];
  const showErrors = fieldTouched && fieldErrors;

  useEffect(() => {
    if (field.value) {
      setDateValue(new Date(field.value));
    }
  }, [field.value]);

  function handleDatePickerChange(date) {
    setDateValue(date);
    setFieldValue(field.name, date);
    
    if (props.onChange) {
      props.onChange(date);
    }
  }

  return (
    <div>
      <label htmlFor={props.name}>
        <span className="pr-2 inline-block">
          { props.label }
        </span>
        { showErrors && <span className="text-[#FB2F2F] dark:text-[#FB2F2F]">{fieldErrors}</span> }
      </label>

      <DatePicker
        {...props}
        id={props.name}
        name={props.name}
        autoComplete="off"
        onChange={handleDatePickerChange}
        dateFormat="MM/dd/yyyy"
        selected={dateValue}
      />
    </div>
  );
};

export default DatePickerField;
