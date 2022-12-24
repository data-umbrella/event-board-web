import React, { useState } from 'react';
import { useFormikContext, useField } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

const DatePickerField = ({ ...props }) => {
  const { setFieldValue, touched, errors } = useFormikContext();
  const [field] = useField(props);
  const [dirty, setDirty] = useState(false);

  const fieldTouched = touched[field.name];
  const fieldErrors = errors[field.name];
  const showErrors = fieldTouched && fieldErrors;

  // console.log('field.value', field.value);

  // value={field.value ? moment(field.value).format('YYYY/MM/DD') : ''}

  function handleDateChange(date) {
    setDirty(true);
    setFieldValue(field.name, date);
    if (props.onChange) { props.onChange(date); }
  }

  if (!dirty) {
    props.value = field.value ? moment(field.value).format('YYYY/MM/DD') : '';
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
        dateFormat="yyyy/MM/dd"
        onChange={handleDateChange}
        selected={field.value ? moment(field.value).toDate() : null}
      />
    </div>
  );
};

export default DatePickerField;
