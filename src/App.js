import React, { useEffect } from 'react';

// Hooks
import { AuthProvider, useAuth } from 'hooks/authentication';

// Elements
import NavigationBar from 'components/elements/NavigationBar';
import AppRoutes from 'components/elements/AppRoutes';
import Footer from 'components/elements/Footer';
import MobileNav from 'components/elements/MobileNav'

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
  return (
    <div className="bg-du-gray dark:bg-du-indigo-900 transition duration-300">
      <AuthProvider>
        <CurrentUser>
          <section className="flex flex-col min-h-screen justify-between">
            <section className="md:hidden">
              <MobileNav />
            </section>
            <section className="container mx-auto px-4 py-2 md:w-10/12">
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
