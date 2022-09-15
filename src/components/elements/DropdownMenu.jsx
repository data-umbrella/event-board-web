import React from 'react';
import { Link } from 'react-router-dom';
import { navStyleClasses } from 'styles/navbar';
import DownArrowIcon from 'components/elements/DownArrowIcon';

function DropDownAction({ value, label, route, action }) {
  if (action) {
    return (
      <a href="#" onClick={action} className={navStyleClasses.navDropdownItem}>{label}</a>
    )
  } else {
    return (
      <Link
        to={route}
        value={value}
        className={navStyleClasses.navDropdownItem}
      >
        {label}
      </Link>
    )
  }
}

function DropdownMenu({ label, options }) {
  return (
    <div className="flex justify-center mt-4 mr-10">
      <div>
        <div className="dropdown relative">
          <a
            className={navStyleClasses.navSelectButton}
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            { label }
            <DownArrowIcon />
          </a>

          <ul
            className={navStyleClasses.navSelectMenu}
            aria-labelledby="dropdownMenuButton2"
          >
            {options.map(({ value, label, route, action }) => {
              return (
                <li key={value}>
                  <DropDownAction
                    value={value}
                    label={label}
                    route={route}
                    action={action}
                  />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DropdownMenu;
