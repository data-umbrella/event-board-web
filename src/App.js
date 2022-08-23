import React from 'react';

// Hooks
import { AuthProvider } from 'hooks/authentication';

// Elements
import NavigationBar from 'components/elements/NavigationBar';
import AppRoutes from 'components/elements/AppRoutes';
import Footer from 'components/elements/Footer';

// Styles and assets
import './App.css';

export default function App() {
  return (
    <div className="bg-du-gray dark:bg-slate-700 transition duration-300">
      <AuthProvider>
        <div className="w-3/4 container mx-auto">
          <NavigationBar />
          <AppRoutes />
        </div>
        <Footer />
      </AuthProvider>
    </div>
  );
}
