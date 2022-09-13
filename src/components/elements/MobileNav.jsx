import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import useDarkMode from 'hooks/dark-mode';
import Logo from '../../assets/logo.png'
import lightMode from '../../assets/light-mode.svg'
import darkMode from '../../assets/dark-mode.svg'
import closeSymbol from '../../assets/HamX.png'
import hamMenu from '../../assets/HamReg.png'


function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [colorTheme, setTheme] = useDarkMode();


  return (
    <>
      <div className='grid text-right bg-du-gray h-16 grid-cols-4 place-content-center place-items-center'>
        <section className='place-content-center place-items-center'>
          {/* <Link to="/"><img src={colorTheme === 'dark' ? logoImg : logoDark} alt="logo" /></Link> */}
          <Link to="/"><img className="object-scale-down object-center h-14 w-16" src={Logo} alt="logo" /></Link>
        </section>
        <span className='text-center col-span-2'>
          <p className='md:text-sm'>Data Science Event Board</p>
        </span>
        <button className="col-start-4 pl-9" onClick={() => setMenuOpen((prev) => !prev)}>
          <img className="inline" src={hamMenu}/>
        </button>
      </div>
      <div className={menuOpen ? 'relative' : 'invisible'}>
        <div style={{backgroundColor: "#1E2445"}} className="z-20 fixed top-0 right-0 pl-8 h-screen text-right w-4/5 bg-sky-700">
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
