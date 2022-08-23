import React from 'react';

function SearchResultViewSelector({ onChange, selectedView }) {
  const viewTypes = [
    { id: 'GRID', label: 'Grid' },
    { id: 'LIST', label: 'List' },
    { id: 'CALENDAR', label: 'Calendar' },
    { id: 'MAP', label: 'Map' },
  ]

  const options = viewTypes.map(viewType => {
    const selectedClass = viewType.id === selectedView ? 'bg-gray-300' : 'dark:text-slate-50';
    return { ...viewType, className: `mr-2 p-2 rounded ${selectedClass}` }
  });

  return (
    <div className="float-right">
      <label className="mr-2 dark:text-slate-50">View as:</label>
      { options.map(option => {
        return (
          <span id={option.id} key={option.id} className={option.className} onClick={onChange}>
            { option.label }
          </span>
        )
      })}
    </div>
  )
}

export default SearchResultViewSelector;
