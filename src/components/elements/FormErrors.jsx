import React from 'react';

export default function FormErrors( { labels, errors } ) {
  const errorKeys = Object.keys(errors)

  return (
    <div className="list-disc dark:text-white">
      {errorKeys.length > 0 && (
        <label className="block font-bold pb-4">
          Resolve the errors above to proceed:
        </label>
      )}
      <ul>
        {errorKeys.map(key => {
          const errorMessage = errors[key].toLowerCase();
          return (
            <li key={key}>
              •
              <span className="text-red-500 dark:text-red-500 pl-2">
                { `${labels[key]} ${errorMessage}` }
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
