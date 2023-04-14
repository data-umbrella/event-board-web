import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "hooks/authentication";
import useDarkMode from "hooks/dark-mode";
import DropdownMenu from "components/elements/DropdownMenu";
import CustomDropdownMenu from "components/elements/CustomDropdownMenu";
import logoImg from "assets/du_sc_logos/logo_event_board.svg";
import logoDark from "assets/du_sc_logos/logo_dark_event_board.png";
import darkMode from "assets/ui/dark-mode.svg";
import lightMode from "assets/ui/light-mode.svg";
import { navStyleClasses } from "styles/navbar";
import { NAVBAR_EVENT_OPTIONS } from "constants/navbar";
import ExternalLink from "assets/ui/externalLink.svg";
import ExternalLinkDark from "assets/ui/externalLinkDark.svg";
import UserProfile from "assets/ui/user-profile.svg";
import userProfileDark from "assets/ui/Profile_dark_mode.svg";
import { DATA_UMBRELLA_URL } from "constants/urls";

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
            <span
              // className=" flex flex-row-reverse
              // dark:text-slate-50 dark:hover:text-teal-40 "
            >
              {auth.currentUser.isAuthenticated ? (
                
                <CustomDropdownMenu
                  
                  label={
                    <img
                      src={colorTheme === "dark" ? UserProfile : userProfileDark}
                    />
                  }
                >
                  <Link
                    to="/settings"
                    className={navStyleClasses.navDropdownItem}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={signOut}
                    className={navStyleClasses.navDropdownItem}
                  >
                    Sign Out
                  </button>
                </CustomDropdownMenu >
                  
              ) : (
                <Link
                  to="/sign-in"
                  className={navStyleClasses.navLink}
                  // "dark:text-slate-50 dark:hover:text-teal-400"
                >
                  Sign In
                </Link>
              )}
            </span>
          
            <div>
              <a
                href={DATA_UMBRELLA_URL}
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
              <a
                href="/events/weekly-digest"
                className={navStyleClasses.navLink}
              >
                Weekly Digest
              </a>
            </div>
            <div>
              <a href="/sponsors" className={navStyleClasses.navLink}>
                Sponsors
              </a>
            </div>
            <span className= "inline-block font-medium hover:underline hover:text-du-purple-500 dark:text-slate-50dark:hover:text-teal-40">
              <DropdownMenu label="Events" options={NAVBAR_EVENT_OPTIONS} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;
