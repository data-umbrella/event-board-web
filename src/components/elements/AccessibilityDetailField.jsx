import React from 'react';
import { ACCESSIBILITY_OPTIONS } from 'constants/events';

function AccessibilityDetailField({ value, onChange }) {
  function handleMultiSelectChange(e) {
    const optionSet = new Set(value);

    if (e.target.checked) {
      optionSet.add(e.target.name);
    } else {
      optionSet.delete(e.target.name);
    }

    onChange('accessibilityOptions', Array.from(optionSet));
  }

  const firstColumnRadioButtons = ACCESSIBILITY_OPTIONS.slice(0, ACCESSIBILITY_OPTIONS.length/2)
  const secondColumnRadioButtons = ACCESSIBILITY_OPTIONS.slice((ACCESSIBILITY_OPTIONS.length/2), ACCESSIBILITY_OPTIONS.length)

  return (
    <div className="grid rounded bg-white p-6 dark:bg-transparent md:grid-cols-2">
      <section>
        {firstColumnRadioButtons.map((option) => {
          const checked = value.includes(option.value);
          return (
            <div key={option.value}>
              <input
                id={option.value}
                name={option.value}
                type="checkbox"
                className="mr-2"
                checked={checked}
                onChange={handleMultiSelectChange}
              />

              <label htmlFor={option.value}>
                {option.label}
              </label>
            </div>
          )
        })}
      </section>
      <section>
        {secondColumnRadioButtons.map(option => {
          const checked = value.includes(option.value);
          return (
            <div key={option.value}>
              <input
                id={option.value}
                name={option.value}
                type="checkbox"
                className="mr-2"
                checked={checked}
                onChange={handleMultiSelectChange}
              />

              <label htmlFor={option.value}>
                {option.label}
              </label>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default AccessibilityDetailField;
