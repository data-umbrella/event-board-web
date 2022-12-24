import React from 'react';
import { useFormikContext, useField } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

const DatePickerField = ({ ...props }) => {
  const { setFieldValue, touched, errors } = useFormikContext();
  const [field] = useField(props);

  const fieldTouched = touched[field.name];
  const fieldErrors = errors[field.name];
  const showErrors = fieldTouched && fieldErrors;

  function handleDateChange(date) {
    setFieldValue(field.name, date);
    if (props.onChange) { props.onChange(date); }
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
        {...field}
        {...props}
        id={props.name}
        name={props.name}
        autoComplete="off"
        onChange={handleDateChange}
        selected={field.value ? moment(field.value).toDate() : null}
      />
    </div>
  );
};

export default DatePickerField;
