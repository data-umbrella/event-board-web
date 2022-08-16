import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from 'assets/logo.png';
import darkMode from 'assets/dark-mode.svg';
import { NAVBAR_EVENT_OPTIONS} from 'constants/navbar';
import { useAuth } from 'hooks/authentication';
import { navStyleClasses } from 'styles/navbar';
import 'tw-elements';


function NavbarMenu() {

  return (
    <div className="mt-4">
      <div className="inline-flex">

        <div className="dropdown relative">
          <a
            className={navStyleClasses.navSelectButton} inline-flex
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Events
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
                d="M31.3 
                192h257.3c17.8 
                0 
                26.7 
                21.5 
                14.1 
                34.1L174.1 
                354.8c-7.8 
                7.8-20.5 
                7.8-28.3 
                0L17.2 
                226.1C4.6 
                213.5 
                13.5 
                192 
                31.3 
                192z"
              ></path>
            </svg>
          </a>
          <ul
            className={navStyleClasses.navSelectMenu}
            aria-labelledby="dropdownMenuButton2"
          >
            {NAVBAR_EVENT_OPTIONS.map(({ value, label, route }) => {
              return (
                <li key="hello">
                  <a href={route} key={value} value={value} className={navStyleClasses.navDropdownItem}>
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

      </div>
    </div>
  )
}



function NavigationBar() {
  const auth = useAuth();

  function signOut() {
    auth.signOutCurrentUser();
  }

  return (
    <>
      <div className="border-b border-black container mx-auto lg:block">
        <div className={`inline-flex justify-end`}>
          <div className="col-span-2">
            <Link to="/"><img src={logoImg} alt="logo" /></Link>
          </div>

          <div className="col-span-1"></div>
          <div className="inline-flex col-span-9">
            <NavbarMenu />
            <div className={navStyleClasses.navLink}>
              <a
                href="/sponsors"
              >
                Sponsors
              </a>
            </div>
            <div className={navStyleClasses.navLink}>
              <a
                href="https://www.dataumbrella.org"
                target="_blank"
                rel="noreferrer"
              >
                Data Umbrella
              </a>
            </div>
            <div className={navStyleClasses.navLink}>
              {auth.currentUser.isAuthenticated
                ? <button onClick={signOut}>Sign Out</button>
                : <Link to="/sign-in">Sign In</Link>
              }
            </div>
            <div>
              <img src={darkMode} className={navStyleClasses.modeImage} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavigationBar;
