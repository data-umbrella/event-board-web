import React, { useState, useEffect } from 'react';
import { useLocation, Link } from "react-router-dom";
import useDarkMode from 'hooks/dark-mode';
import Logo from '../../assets/logo.png';
import lightMode from '../../assets/light-mode.svg';
import darkMode from '../../assets/dark-mode.svg';
import closeSymbol from '../../assets/HamX.png';
import { HamBars } from '../../assets/HamBars';
import logoDark from '../../assets/logoDark.png';
import { donateURL } from 'constants/donate';


function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [colorTheme, setTheme] = useDarkMode();
  
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)

  }, [location])


  return (
    <>
      <div className="grid h-16 grid-cols-4 place-items-center bg-du-gray text-right dark:bg-slate-700">
        <section className="place-content-center place-items-center">
          <Link
            onClick={() => setMenuOpen(false)}
            to="/"
          >
            <img
              className="h-14 w-16 object-scale-down object-center"
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
        <div className="fixed top-0 right-0 z-20 h-screen w-4/5 bg-fuchsia-800 pl-8 text-right dark:bg-du-deepPurple">
          <div className="grid grid-rows-1 place-content-evenly gap-3 text-2xl text-white">
            <button onClick={() => setMenuOpen((prev) => !prev)} className="pb-12 pt-10 text-right">
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
            <Link to="/sign-in">Sign In</Link><br />            
            <Link to="/events/calendar">Event Calendar</Link><br />
            <Link to="/events/new">Post Event</Link><br/>
            <Link to="/events/weekly-digest">Weekly Digest</Link><br/>
            <Link to="/sponsors">Sponsors</Link><br/>
            <a href={donateURL} target="_blank" rel="noreferrer">Donate</a><br/>
            <Link to="/about">About Us</Link><br/>
            <Link to="/contact">Contact Us</Link><br/>
            <Link to="/FAQs">FAQs</Link><br/>
            <Link to="/privacy">Privacy</Link><br/>
            <Link to="/codeofconduct">Terms & Conditions</Link><br/>
          </div>
        </div>
      </div>
    </>
  )

}


export default MobileNav
