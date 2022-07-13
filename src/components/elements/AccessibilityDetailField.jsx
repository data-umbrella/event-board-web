import { ACCESSIBILITY_OPTIONS } from 'constants/events';

function AccessibilityDetailField({ value, onChange }) {
  function handleMultiSelectChange(e) {
    const optionSet = new Set(value);

    if (e.target.checked) {
      optionSet.add(e.target.name);
    } else {
      optionSet.delete(e.target.name);
    }

    onChange('accessibilityDetails', Array.from(optionSet));
  }

  return (
    <>
      <label className="block font-bold mb-2">Accessibility Options</label>

      <div className="grid grid-cols-3 bg-white rounded p-6">
        { ACCESSIBILITY_OPTIONS.map(option => {
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
      </div>
    </>
  )
}

export default AccessibilityDetailField;
