import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import CodeOfConductPage from 'components/pages/CodeOfConductPage'
import DonatePage from 'components/pages/DonatePage';
import EditEventPage from 'components/pages/EditEventPage';
import EventCalendarPage from 'components/pages/EventCalendarPage';
import EventPage from 'components/pages/EventPage';
import HomePage from 'components/pages/HomePage';
import NewEventPage from 'components/pages/NewEventPage';
import PostEventSuccessPage from 'components/pages/PostEventSuccessPage';
import ReviewEventPage from 'components/pages/ReviewEventPage';
import SignInPage from 'components/pages/SignInPage';
import SignUpPage from 'components/pages/SignUpPage';
import WeeklyDigestPage from 'components/pages/WeeklyDigestPage';
import SponsorsPage from 'components/pages/SponsorsPage';
import FAQsPage from 'components/pages/FAQsPage';
import AboutPage from 'components/pages/AboutPage';
import MagicLinkSentPage from 'components/pages/MagicLinkSentPage';
import VerifyMagicLinkPage from 'components/pages/VerifyMagicLinkPage';
import ContactPage from 'components/pages/ContactPage';
import PrivacyPage from 'components/pages/PrivacyPolicyPage';
import ContactSuccessPage from 'components/pages/ContactSuccessPage';

// Elements
import RequireAuth from 'components/elements/RequireAuth';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/codeofconduct" element={<CodeOfConductPage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
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
      <Route
        path="/events/:eventId/review"
        element={
          <RequireAuth>
            <ReviewEventPage />
          </RequireAuth>
        }
      />
      <Route path="/events/:eventId/details" element={<EventPage />} />
      <Route
        path="/events/:eventId/edit"
        element={
          <RequireAuth>
            <EditEventPage />
          </RequireAuth>
        }
      />

      <Route path="/donate" element={<DonatePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/sponsors" element={<SponsorsPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      {/* <Route path="/terms" element={<TermsPage />} /> */}

      <Route path="/FAQs" element={<FAQsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route
        path="/registration/confirmation"
        element={<MagicLinkSentPage />}
      />
      <Route
        path="/sign-in/sent"
        element={<MagicLinkSentPage />}
      />

      <Route
        path="/registration/verify/:token"
        element={<VerifyMagicLinkPage />}
      />
      <Route path="/contact-success" element={<ContactSuccessPage />} />
    </Routes>
  );
}

export default AppRoutes;
