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

  return (
    <div className="grid md:grid-cols-2 bg-white dark:bg-transparent rounded p-6">
      <section>
        {ACCESSIBILITY_OPTIONS.slice(0, ACCESSIBILITY_OPTIONS.length/2).map((option) => {
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
        {ACCESSIBILITY_OPTIONS.slice((ACCESSIBILITY_OPTIONS.length/2), ACCESSIBILITY_OPTIONS.length).map(option => {
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
