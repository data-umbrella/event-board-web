import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from "react-router-dom";
import useDarkMode from 'hooks/dark-mode';
import Logo from 'assets/du_sc_logos/logo_event_board.svg';
import lightMode from 'assets/ui/light-mode.svg';
import darkMode from 'assets/ui/dark-mode.svg';
import closeSymbol from 'assets/ui/HamX.png';
import { HamBars } from 'assets/ui/HamBars';
import logoDark from 'assets/du_sc_logos/logo_dark_event_board.png';
import { DONATE_URL } from 'constants/urls';
import { useAuth } from 'hooks/authentication';

function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [colorTheme, setTheme] = useDarkMode();
  const location = useLocation();
  const closeButton = useRef(null);
  const auth = useAuth();
  const signOut = () => auth.signOutCurrentUser();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('no-scroll');
      closeButton.current.scrollIntoView();
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [menuOpen]);

  return (
    <>
      <div className="grid grid-cols-4 place-items-center text-right h-16 bg-du-gray dark:bg-slate-700">
        <section className="place-content-center place-items-center">
          <Link
            onClick={() => setMenuOpen(false)}
            to="/"
          >
            <img
              className="object-scale-down object-center h-14 w-16"
              src={colorTheme === 'dark' ? Logo : logoDark}
              alt="logo"
            />
          </Link>
        </section>
        <span className="col-span-2 text-center">
          <p className="md:text-sm">Data Science Event Board</p>
        </span>
        <button className="col-start-4 pl-9" onClick={() => setMenuOpen((prev) => !prev)}>
          <span className="text-black dark:text-white">
            <HamBars />
          </span>
        </button>
      </div>
      <div className={menuOpen ? 'relative' : 'invisible'}>
        <div
          className="dark:bg-du-deepPurple bg-fuchsia-800 z-20 fixed top-0 right-0 pl-8 h-screen text-right w-4/5"
          style={{ overflowY: 'scroll' }}
        >
          <div className="text-white text-2xl grid grid-rows-11 gap-3 place-content-evenly">
            <button
              className="pb-12 pt-10 text-right"
              ref={closeButton}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              Close <img className="inline" src={closeSymbol} />
            </button>
            <div>
              <img
                src={colorTheme === 'dark' ? darkMode : lightMode}
                onClick={() => setTheme(colorTheme)}
                className="float-right pb-2"
                alt="logo"
              />
            </div>

            {auth.currentUser.isAuthenticated ? (
              <a onClick={signOut}>Sign Out</a>
            ) : (
              <Link to="/sign-in">Sign In</Link>
            )}
            <Link to="/events/calendar">Event Calendar</Link><br />
            <Link to="/events/new">Post Event</Link><br/>
            <Link to="/events/email-digest">Email Digest</Link><br/>
            <Link to="/sponsors">Sponsors</Link><br/>
            <a href={DONATE_URL} target="_blank" rel="noreferrer">Donate</a><br/>
            <Link to="/about">About Us</Link><br/>
            <Link to="/contact">Contact Us</Link><br/>
            <Link to="/FAQs">FAQs</Link><br/>
            <Link to="/privacy">Privacy</Link><br/>
            <Link to="/codeofconduct">Terms & Conditions</Link><br/>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileNav;
