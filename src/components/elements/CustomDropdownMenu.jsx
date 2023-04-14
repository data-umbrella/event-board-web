import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import { navStyleClasses } from 'styles/navbar';
import DownArrowIcon from 'components/elements/DownArrowIcon';

function CustomDropdownMenu({ label, children}) {
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
            {children}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CustomDropdownMenu;
