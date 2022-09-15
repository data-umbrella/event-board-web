import React from 'react';

const styleClasses = {
  option: 'mr-2 p-2 rounded',
  selected: 'bg-gray-300 bg-du-purple-500 text-white',
  unselected: 'dark:text-slate-50 bg-du-purple-200',
}

function viewTypeClassName(viewType, selectedView) {
  const selectedClassName = viewType.id === selectedView
    ? styleClasses.selected
    : styleClasses.unselected;

  return `${styleClasses.option} ${selectedClassName}`;
}

function SearchResultViewSelector({ onChange, selectedView }) {
  const viewTypes = [
    { id: 'GRID', label: 'Grid' },
    { id: 'LIST', label: 'List' },
    { id: 'CALENDAR', label: 'Calendar' },
    // TODO: Add back option once the event board map is implemented.
    // { id: 'MAP', label: 'Map' },
  ]

  return (
    <div className="md:float-right">
      <label className="mr-2 dark:text-slate-50">View as:</label>
      { viewTypes.map(viewType => (
        <span
          id={viewType.id}
          key={viewType.id}
          className={viewTypeClassName(viewType, selectedView)}
          onClick={onChange}
        >
          { viewType.label }
        </span>
      ))}
    </div>
  )
}

export default SearchResultViewSelector;
