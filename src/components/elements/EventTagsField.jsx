import React from 'react';
import formStyleClasses from 'styles/forms';
import CreatableSelect from 'react-select/creatable';
import useDarkMode from 'hooks/dark-mode';
import { useFormikContext, useField } from 'formik';

const creatableSelectControlStyles = {
  border: 'none',
  outline: 'none',
  boxShadow: 'none',
  backgroundColor: 'transparent',
}

function EventTagsField(props) {
  const [colorTheme] = useDarkMode();
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  const value = field.value.map(tag => ({ value: tag, label: tag }))

  const selectOptions = props.options.length > 0
    ? [...props.options, ...value]
    : [{ value: '', label: 'Create a new tag' }]

  return (
    <CreatableSelect
      isMulti
      className={formStyleClasses.input}
      placeholder={props.placeholder}
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          ...creatableSelectControlStyles,
        }),
        input: provided => ({
          ...provided,
          color: colorTheme === 'light' ? 'white' : '#545454',
        })
      }}
      options={selectOptions}
      defaultValue={value}
      value={value}
      onCreateOption={(newOption) => {
        let formattedOption = newOption;
        
        if (props.encodeTags) {
          formattedOption = newOption
            .toLocaleLowerCase()
            .trim()
            .split(' ')
            .join('-');
        }

        const existingOptions = value.map((option) => option.value);
        setFieldValue(props.name, [formattedOption, ...existingOptions]);
      }}
      onChange={(selectedOptions) => {
        const newValue = selectedOptions.map((option) => option.value);
        setFieldValue(props.name, newValue);
      }}
    />
  );
}

export default EventTagsField;
