import React from 'react';
import { Link } from 'react-router-dom';
import { navStyleClasses } from 'styles/navbar';

function DropdownMenu({ label, options }) {
  return (
    <div className="flex justify-center mt-4">
      <div>
        <div className="dropdown relative">
          <a
            className={navStyleClasses.navSelectButton}
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            { label }
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="caret-down"
              className="w-2 ml-2"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                fill="currentColor"
                d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
              >
              </path>
            </svg>
          </a>

          <ul
            className={navStyleClasses.navSelectMenu}
            aria-labelledby="dropdownMenuButton2"
          >
            {options.map(({ value, label, route }) => {
              return (
                <li key={value}>
                  <Link to={route} value={value} className={navStyleClasses.navDropdownItem}>
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
