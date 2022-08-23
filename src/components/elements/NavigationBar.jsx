import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from 'assets/logo.png';
import { useAuth } from 'hooks/authentication';
import useDarkmode from "hooks/useDarkmode";

const styleClasses = {
  navLink: 'inline-block mr-4 mt-6 dark:text-slate-50',
  navContainer: 'grid grid-cols-12 mb-4',
}

function NavigationBar() {
  const auth = useAuth();

  function signOut() {
    auth.signOutCurrentUser();
  }

  const [colorTheme, setTheme] = useDarkmode();

  return (
    <nav className="border-b border-black container mx-auto lg:block dark:border-slate-50">
      <div className={styleClasses.navContainer}>
        <div className="col-span-2">
          <Link to="/"><img src={logoImg} alt="logo"/></Link>
        </div>

        <div className="col-span-1"></div>
        <div className="col-span-9">
          <div className={styleClasses.navLink}><Link to="/events/calendar">Event Calendar</Link></div>
          <div className={styleClasses.navLink}><Link to="/events/new">Post Event</Link></div>
          <div className={styleClasses.navLink}><Link to="/events/weekly-digest">Weekly Digest</Link></div>
          <div className={styleClasses.navLink}>
            <a
              href="https://www.dataumbrella.org"
              target="_blank"
              rel="noreferrer"
            >
              Data Umbrella
            </a>
          </div>
          <div className={styleClasses.navLink}><Link to="/sponsors">Sponsors</Link></div>
          <div className={styleClasses.navLink}>
            { auth.currentUser.isAuthenticated === true
              ? <button onClick={signOut}>Sign Out</button>
              : <Link to="/sign-in">Sign In</Link>
            }
          </div>
          <button type="button" onClick={() => setTheme(colorTheme)} className={styleClasses.navLink}>Dark Mode</button>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar;
