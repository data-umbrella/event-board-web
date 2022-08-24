import React from 'react';

// Hooks
import { AuthProvider } from 'hooks/authentication';

// Elements
import NavigationBar from 'components/elements/NavigationBar';
import AppRoutes from 'components/elements/AppRoutes';
import Footer from 'components/elements/Footer';

// Styles and assets
import './App.css';
import 'tw-elements';

export default function App() {
  return (
    <div className="bg-du-gray dark:bg-slate-700 transition duration-300">
      <AuthProvider>
        <div className="flex flex-col h-screen justify-between">
          <div className="w-3/4 container mx-auto">
            <NavigationBar />
            <AppRoutes />
          </div>
          <Footer />
        </div>
      </AuthProvider>
    </div>
  );
}
