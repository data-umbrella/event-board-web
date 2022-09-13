import React, { useEffect } from 'react';

// Google Analytics
import ReactGA from 'react-ga';

// Hooks
import { AuthProvider, useAuth } from 'hooks/authentication';

// Elements
import NavigationBar from 'components/elements/NavigationBar';
import AppRoutes from 'components/elements/AppRoutes';
import Footer from 'components/elements/Footer';

// Styles and assets
import './App.css';
import 'tw-elements';

if(process.env.NODE_ENV === 'production') {
  ReactGA.initialize('G-NP82011Y5G');
  ReactGA.pageview(window.location.pathname + window.location.search);
}

function CurrentUser({ children }) {
  const auth = useAuth();

  useEffect(() => {
    auth.authenticateUser();
  }, []);

  return children;
}

export default function App() {
  return (
    <div className="bg-du-gray dark:bg-slate-700 transition duration-300">
      <AuthProvider>
        <CurrentUser>
          <div className="flex flex-col min-h-screen justify-between">
            <div className="w-3/4 container mx-auto">
              <NavigationBar />
              <AppRoutes />
            </div>
            <Footer />
          </div>
        </CurrentUser>
      </AuthProvider>
    </div>
  );
}
