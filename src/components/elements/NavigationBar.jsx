import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from 'assets/logo.png';
import { NAVBAR_EVENT_OPTIONS, NAVBAR_SUPPORT_OPTIONS } from 'constants/navbar';
import { useAuth } from 'hooks/authentication';
import { navStyleClasses } from 'styles/navbar';


function NavbarMenu() {
  const [showMenu, useShowMenu] = useState("invisible")
  return (
    <>
      <div className="relative inline-block text-left">
        <div>
          <button type="button" 
            onClick={() => useShowMenu("visible")} 
            className="" id="menu-button" 
            aria-expanded="true"
            aria-haspopup="true">
            Events
          </button>
        </div>

        <div className={`${showMenu} origin-top-right 
          absolute right-0 mt-2 w-56 rounded-md 
          shadow-lg bg-white ring-1 ring-black 
          ring-opacity-5 focus:outline-none`} 
        role="menu" aria-orientation="vertical" 
        aria-labelledby="menu-button" tabIndex="-1">
          <div className="py-1" role="none">
            <div name="navbarEventType" component="select" className={navStyleClasses.navSelectItem}>
              {NAVBAR_EVENT_OPTIONS.map(({ value, label, route }) => {
                return (
                  <a key={value} value={value} className={navStyleClasses.navLink} href={route}>
                    {label}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}



function handleNavbarClick() {
  return (
    <>
    
    </>

  )
}


function NavigationBar() {
  const auth = useAuth();

  function signOut() {
    auth.signOutCurrentUser();
  }

  return (
    <nav className="border-b border-black container mx-auto lg:block">
      <div className={navStyleClasses.navContainer}>
        <div className="col-span-2">
          <Link to="/"><img src={logoImg} alt="logo"/></Link>
        </div>

        <div className="col-span-1"></div>
        <div className="col-span-9">

          <NavbarMenu />

          <select name="navbarSupportType" component="select" className={navStyleClasses.navLink}>
            { NAVBAR_SUPPORT_OPTIONS.map(({ value, label, route }) => {
              return (
                <option key={value} value={value} className={navStyleClasses.navLink} onClick={handleNavbarClick(route)}>
                  <Link to={route}>{ label }</Link>
                </option>
              )
            })}
          </select>

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
            { auth.currentUser.isAuthenticated 
              ? <button onClick={signOut}>Sign Out</button>
              : <Link to="/sign-in">Sign In</Link>
            }
          </div>
          <div className={navStyleClasses.navLink}>
            Dark Mode
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar;
