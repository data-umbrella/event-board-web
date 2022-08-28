import React, { useContext, createContext, useState } from 'react';
import camelcaseKeys from 'camelcase-keys';
import {
  fetchCurrentUser,
  fetchVerification,
  fetchMagicLink,
  fetchSignOut,
} from 'services/authentication';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({ isAuthenticated: false });

  const sendMagicLink = async (email, callback) => {
    try {
      await fetchMagicLink(email);
      callback(true);
    } catch (e) {
      callback(false, e.message);
    }
  };

  const authenticateUser = async () => {
    try {
      const currentUserResponse = await fetchCurrentUser();
      const currentUserJSON = await currentUserResponse.json();

      if (currentUserResponse.status !== 200) {
        throw (new Error('Bad request'));
      }

      setCurrentUser({
        ...camelcaseKeys(currentUserJSON),
        isAuthenticated: true,
      });
    } catch (e) {
      setCurrentUser({ isAuthenticated: false });
    }
  };

  const verifyOneTimePassCode = async (token, callback) => {
    try {
      const email = window.localStorage.getItem('USERNAME');
      const currentUserJSON = await fetchVerification(token, email);
      setCurrentUser({
        ...camelcaseKeys(currentUserJSON),
        isAuthenticated: true,
      });
      callback(true);
    } catch (e) {
      callback(false, e.message);
    }
  };

  const signOutCurrentUser = async () => {
    try {
      await fetchSignOut();
      setCurrentUser({ isAuthenticated: false });
    } catch (e) {
      window.alert('Something went wrong');
    }
  }

  const value = {
    currentUser,
    sendMagicLink,
    verifyOneTimePassCode,
    fetchCurrentUser,
    authenticateUser,
    signOutCurrentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      { children }
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
