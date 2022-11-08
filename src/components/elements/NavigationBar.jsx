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
import ExternalLink from 'assets/externalLink.svg'
import ExternalLinkDark from 'assets/externalLinkDark.svg'

function NavigationBar() {
  const auth = useAuth();
  const [colorTheme, setTheme] = useDarkMode();
  const signOut = () => auth.signOutCurrentUser();

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
            <Link to="/">
              <img
                src={colorTheme === "dark" ? logoImg : logoDark}
                alt="logo"
              />
            </Link>
          </div>

          <div className="flex w-full flex-row-reverse">
            <div>
              <img
                src={colorTheme === "dark" ? darkMode : lightMode}
                onClick={() => setTheme(colorTheme)}
                className={navStyleClasses.modeImage}
                alt="logo"
              />
            </div>
            <div className={navStyleClasses.navLink}>
              {auth.currentUser.isAuthenticated ? (
                <button onClick={signOut}>Sign Out</button>
              ) : (
                <Link
                  to="/sign-in"
                  className="dark:text-slate-50 dark:hover:text-teal-400"
                >
                  Sign In
                </Link>
              )}
            </div>
            <div>
              <a
                href="https://www.dataumbrella.org"
                target="_blank"
                rel="noreferrer"
                className={navStyleClasses.navLink}
              >
                Data Umbrella
                <img
                  src={colorTheme === "dark" ? ExternalLinkDark : ExternalLink}
                  className="inline pl-1"
                  alt="externalLink"
                />
              </a>
            </div>
            <div>
              <a href="/sponsors" className={navStyleClasses.navLink}>
                Sponsors
              </a>
            </div>
            <span className="inline-block font-medium hover:underline hover:text-du-purple-500 dark:text-slate-50dark:hover:text-teal-40">
              <DropdownMenu label="Events" options={NAVBAR_EVENT_OPTIONS} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;
