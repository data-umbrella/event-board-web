import React, { useEffect } from 'react';

// Hooks
import { AuthProvider, useAuth } from 'hooks/authentication';

// Elements
import NavigationBar from 'components/elements/NavigationBar';
import AppRoutes from 'components/elements/AppRoutes';
import Footer from 'components/elements/Footer';
import MobileNav from 'components/elements/MobileNav'
import { useLocation } from "react-router-dom";

// Styles and assets
import './App.css';
import 'tw-elements';

function CurrentUser({ children }) {
  const auth = useAuth();

  useEffect(() => {
    auth.authenticateUser();
  }, []);

  return children;
}

export default function App() {
  let location = useLocation();

  useEffect(() => {
    if(process.env.NODE_ENV === 'production') {
      window.gtag("config", "GA_MEASUREMENT_ID", {
        page_path: location.pathname,
      })
    }
  }, [location]);
  
  return (
    <div className="bg-du-gray dark:bg-slate-700 transition duration-300">
      <AuthProvider>
        <CurrentUser>
          <section className="flex flex-col min-h-screen justify-between">
            <section className="md:hidden">
              <MobileNav />
            </section>
            <section className="w-3/4 container mx-auto">
              <div className="hidden md:block">
                <NavigationBar />
              </div>
              <AppRoutes />
            </section>
            <Footer />
          </section>
        </CurrentUser>
      </AuthProvider>
    </div>
  );
}
