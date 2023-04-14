import React from 'react';
import { Link } from 'react-router-dom';
import { navStyleClasses } from 'styles/navbar';
import DownArrowIcon from 'components/elements/DownArrowIcon';

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
            {options.map(({ value, label, route }) => {
              return (
                <li key={value}>
                  <Link
                    to={route}
                    value={value}
                    className={navStyleClasses.navDropdownItem}
                  >
                    {label}
                  </Link>
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
