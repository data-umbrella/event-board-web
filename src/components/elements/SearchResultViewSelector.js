import React from 'react';

const styleClasses = {
  option: 'mr-2 p-2 rounded cursor-pointer',
  selected: 'bg-du-purple-500 dark:bg-du-purple-800 text-white',
  unselected: 'bg-du-purple-200 dark:bg-du-purple-300 dark:text-du-purple-100',
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
    <div className="hidden sm:inline-block md:float-right">
      <label className="mr-2 dark:text-du-gray">View as:</label>
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
