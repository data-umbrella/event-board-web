import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import DonatePage from 'components/pages/DonatePage';
import EditEventPage from 'components/pages/EditEventPage';
import EventCalendarPage from 'components/pages/EventCalendarPage';
import EventPage from 'components/pages/EventPage';
import HomePage from 'components/pages/HomePage';
import NewEventPage from 'components/pages/NewEventPage';
import PostEventSuccessPage from 'components/pages/PostEventSuccessPage';
import ReviewEventPage from 'components/pages/ReviewEventPage';
import SignInPage from 'components/pages/SignInPage';
import WeeklyDigestPage from 'components/pages/WeeklyDigestPage';
import SponsorsPage from 'components/pages/SponsorsPage';

// Elements
import NavigationBar from 'components/elements/NavigationBar';
import RequireAuth from 'components/elements/RequireAuth';


import { AuthProvider } from 'hooks/authentication';

// Styles and assets
import './App.css';
import logoImg from 'assets/logo.png';

export default function App() {
  return (
    <div className="bg-du-gray">
      <AuthProvider>
        <div className="w-3/4 container mx-auto">
          <NavigationBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/events/calendar" element={<EventCalendarPage />} />
            <Route path="/events/confirmation" element={<PostEventSuccessPage />} />
            <Route
              path="/events/new"
              element={
                <RequireAuth>
                  <NewEventPage />
                </RequireAuth>
              }
            />
            <Route path="/events/weekly-digest" element={<WeeklyDigestPage />} />
            <Route path="/events/:eventId/review" element={<ReviewEventPage />} />
            <Route path="/events/:eventId/details" element={<EventPage />} />
            <Route path="/events/:eventId/edit" element={<EditEventPage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/sponsors" element={<SponsorsPage />} />
          </Routes>
        </div>
        <footer className="block bg-indigo-900 h-60">
          <div className="grid grid-cols-4 text-white px-32 pt-12 pb-24 text-left">
            <div>
              <img src={logoImg} alt="logo" />
            </div>

            <div>
              <ul className="grid grid-rows-3 gap-4">
                <li>About us</li>
                <li>Meet the team</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div>
              <ul className="grid grid-rows-3 gap-4">
                <li>Donate</li>
                <li>Sponsors</li>
                <li>FAQ's</li>
              </ul>
            </div>

            <div>
              <ul className="grid grid-rows-3 gap-4">
                <li>Data Umbrella</li>
                <li>Privacy</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>
        </footer>
      </AuthProvider>
    </div>
  );
}
