import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from 'hooks/authentication';
import useDarkMode from 'hooks/dark-mode';
import DropdownMenu from 'components/elements/DropdownMenu';
import logoImg from 'assets/logo.svg';
import logoDark from 'assets/logoDark.png'
import darkMode from 'assets/dark-mode.svg';
import lightMode from 'assets/light-mode.svg';
import { navStyleClasses } from 'styles/navbar';
import { NAVBAR_EVENT_OPTIONS } from 'constants/navbar';

function NavigationBar() {
  const auth = useAuth();
  const [colorTheme, setTheme] = useDarkMode();
  const signOut = () => auth.signOutCurrentUser();

  return (
    <>
      <div
        className="
          container
          mx-auto
          border-b
          border-black
          py-4
          dark:border-slate-50
          lg:block
        "
      >
        <div className="flex">
          <div className="">
            <Link to="/"><img src={colorTheme === 'dark' ? logoImg : logoDark} alt="logo" /></Link>
          </div>

          <div className=""></div>
          <div className="flex w-full flex-row-reverse">
            <div>
              <img
                src={colorTheme === 'dark' ? darkMode : lightMode}
                onClick={() => setTheme(colorTheme)}
                className={navStyleClasses.modeImage}
                alt="logo"
              />
            </div>
            <div className={navStyleClasses.navLink}>
              {auth.currentUser.isAuthenticated
                ? <button onClick={signOut}>Sign Out</button>
                : <Link to="/sign-in">Sign In</Link>
              }
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
              <a href="/sponsors">
                Sponsors
              </a>
            </div>
            <DropdownMenu label="Events" options={NAVBAR_EVENT_OPTIONS} />
          </div>
        </div>
      </div>
    </>
  )
}

export default NavigationBar;
