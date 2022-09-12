import React from 'react'
import { Link } from 'react-router-dom';

function MobileNav() {
  return (
    <>
      <div className='text-right'>
        <p>X</p>
      </div>
      <div className='relative'>
        <div style={{backgroundColor: "#1E2445"}} className="z-20 fixed top-0 right-0 pl-8 h-screen text-right w-4/5 bg-sky-700">
          <div className='text-white text-2xl grid grid-rows-11 gap-3 place-content-evenly'>
            <a className='pb-12 pt-10'>
              Close X
            </a>
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
