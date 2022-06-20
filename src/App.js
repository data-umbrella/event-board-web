import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

import HomePage from 'components/pages/HomePage';
import SignInPage from 'components/pages/SignInPage';
import EventPage from 'components/pages/EventPage';
import NewEventPage from 'components/pages/NewEventPage';
import EditEventPage from 'components/pages/EditEventPage';
import ReviewEventPage from 'components/pages/ReviewEventPage';
import PostEventSuccessPage from 'components/pages/PostEventSuccessPage';
import EventCalendarPage from 'components/pages/EventCalendarPage';
import DonatePage from 'components/pages/DonatePage';

import mainLogo from'./logo.png';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <img  src={mainLogo} style={{ width: '5em'}} alt="fireSpot"/>
              </Link>
            </li>
            <li><Link to="/events/calendar">Event Calendar</Link></li>
            <li><Link to="/events/weekly-digest">Weekly Digest</Link></li>
            <li><a href="https://www.dataumbrella.org">Data Umbrella</a></li>
            <li><Link to="/sponsors">Sponsors</Link></li>
            <li><Link to="/sign-in">Sign In</Link></li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/events/calendar" element={<EventCalendarPage />} />
        <Route path="/events/confirmation" element={<PostEventSuccessPage />} />
        <Route path="/events/new" element={<NewEventPage />} />
        <Route path="/events/:eventId/details" element={<EventPage />} />
        <Route path="/events/:eventId/edit" element={<EditEventPage />} />
        <Route path="/donate" element={<DonatePage />} />
      </Routes>
    </Router>
  );
}
