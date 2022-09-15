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
  const authLinks = [
    { label: 'Settings', value: 'settings', route: '/account-settings' },
    { label: 'Sign Out', value: 'sign-out', action: () => auth.signOutCurrentUser() },
  ]

  return (
    <>
      <div
        className="
          border-b
          border-black
          container
          mx-auto
          lg:block
          dark:border-slate-50
          pt-4
          pb-4
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

            <div>
              { auth.currentUser.isAuthenticated
                ? <DropdownMenu label="Account" options={authLinks} />
                : <div className={navStyleClasses.navLink}><Link to="/sign-in">Sign In</Link></div>
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

            <div>
              <DropdownMenu label="Events" options={NAVBAR_EVENT_OPTIONS} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavigationBar;
