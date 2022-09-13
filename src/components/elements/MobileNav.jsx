import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import useDarkMode from 'hooks/dark-mode';
import Logo from '../../assets/logo.png'
import lightMode from '../../assets/light-mode.svg'
import darkMode from '../../assets/dark-mode.svg'
import closeSymbol from '../../assets/HamX.png'
import hamMenu from '../../assets/HamReg.png'
import logoDark from '../../assets/logoDark.png'


function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [colorTheme, setTheme] = useDarkMode();
  
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)

  }, [location])


  return (
    <>
      <div className='grid grid-cols-4 place-items-center text-right h-16 bg-du-gray dark:bg-slate-700'>
        <section className='place-content-center place-items-center'>
          <Link onClick={() => setMenuOpen(false)} to="/"><img className="object-scale-down object-center h-14 w-16" src={colorTheme === 'dark' ? Logo : logoDark} alt="logo" /></Link>
        </section>
        <span className='col-span-2 text-center'>
          <p className='md:text-sm'>Data Science Event Board</p>
        </span>
        <button className="col-start-4 pl-9" onClick={() => setMenuOpen((prev) => !prev)}>
          <img className="inline" src={hamMenu}/>
        </button>
      </div>
      <div className={menuOpen ? 'relative' : 'invisible'}>
        <div className="dark:bg-du-deepPurple bg-fuchsia-800 z-20 fixed top-0 right-0 pl-8 h-screen text-right w-4/5">
          <div className='text-white text-2xl grid grid-rows-11 gap-3 place-content-evenly'>
            <button onClick={() => setMenuOpen((prev) => !prev)} className='pb-12 pt-10 text-right'>
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
            <Link to="/donate">Donate</Link><br/>
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
