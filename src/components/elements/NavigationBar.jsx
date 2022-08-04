import { Link } from 'react-router-dom';
import logoImg from 'assets/logo.png';
import { NAVBAR_EVENT_OPTIONS, NAVBAR_SUPPORT_OPTIONS } from 'constants/navbar';
import formStyleClasses from 'styles/forms';

const styleClasses = {
  navLink: 'inline-block mr-4 mt-6',
  navContainer: 'grid grid-cols-12 mb-4',
}

function NavigationBar() {
  return (
    <nav className="border-b border-black container mx-auto lg:block">
      <div className={styleClasses.navContainer}>
        <div className="col-span-2">
          <Link to="/"><img src={logoImg} alt="logo"/></Link>
        </div>

        <div className="col-span-1"></div>
        <div className="col-span-9">
          <div>
              <div name="navbarEventType" component="select" className={formStyleClasses.select}>
              { NAVBAR_EVENT_OPTIONS.map(({ value, label }) => {
                return <option key={value} value={value} className={styleClasses.navLink}><Link to="/events/calendar">{ label }</Link></option>
              })}
              </div>
            </div>
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
            <Link to="/sign-in">Sign In</Link>
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
