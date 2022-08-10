import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from 'assets/logo.png';
import { NAVBAR_EVENT_OPTIONS, NAVBAR_SUPPORT_OPTIONS } from 'constants/navbar';
import formStyleClasses from 'styles/forms';
import { useAuth } from 'hooks/authentication';

const styleClasses = {
  navLink: 'inline-block mr-4 mt-6',
  navContainer: 'grid grid-cols-12 mb-4',
}

function NavBarSelectField () {
  return (
    <>
      <select
        name="type"
        className={`${formStyleClasses.select}`}
        // onChange={handleSocialMediaChange}
        // value={link.type}
      >
        <option>Events</option>
        <option value="twitter">Twitter</option>
        <option value="linkedin">LinkedIn</option>
        <option value="facebook">Facebook</option>
      </select>
    </>
  )
}

function handleNavbarClick({route}) {
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
      <div className={styleClasses.navContainer}>
        <div className="col-span-2">
          <Link to="/"><img src={logoImg} alt="logo"/></Link>
        </div>

        <div className="col-span-1"></div>
        <div className="col-span-9">
        {/* <NavBarSelectField /> */}

          <select name="navbarEventType" component="select" className={styleClasses.navLink}>
          { NAVBAR_EVENT_OPTIONS.map(({ value, label, route }) => {
            return <option key={value} value={value} className={styleClasses.navLink}><Link to={route}>{ label }</Link></option>
          })}
          </select>

          <select name="navbarSupportType" component="select" className={styleClasses.navLink}>
          { NAVBAR_SUPPORT_OPTIONS.map(({ value, label, route }) => {
            return <option key={value} value={value} className={styleClasses.navLink}><Link to={route}>{ label }</Link></option>
          })}
          </select>

          <div className={styleClasses.navLink}>
            <a
              href="https://www.dataumbrella.org"
              target="_blank"
              rel="noreferrer"
            >
              Data Umbrella
            </a>
          </div>
          <div className={styleClasses.navLink}>
            { auth.currentUser.isAuthenticated 
              ? <button onClick={signOut}>Sign Out</button>
              : <Link to="/sign-in">Sign In</Link>
            }
          </div>
          <div className={styleClasses.navLink}>
            Dark Mode
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar;
