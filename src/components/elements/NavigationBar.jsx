import { Link } from 'react-router-dom';
import logoImg from 'assets/logo.png';

function NavigationBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img src={logoImg} style={{ width: '5em'}} alt="fireSpot"/>
          </Link>
        </li>
        <li><Link to="/events/calendar">Event Calendar</Link></li>
        <li><Link to="/events/weekly-digest">Weekly Digest</Link></li>
        <li><a href="https://www.dataumbrella.org">Data Umbrella</a></li>
        <li><Link to="/sponsors">Sponsors</Link></li>
        <li><Link to="/sign-in">Sign In</Link></li>
      </ul>
    </nav>
  )
}

export default NavigationBar;
