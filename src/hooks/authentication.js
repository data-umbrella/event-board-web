import React, { useContext, createContext, useState } from 'react';
import camelcaseKeys from 'camelcase-keys';
import {
  fetchCurrentUser,
  fetchVerification,
  fetchMagicLink,
  fetchSignOut,
} from 'services/authentication';
import { fetchDeleteAccount } from 'services/delete-account';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({ isAuthenticated: false });

  const updateCurrentUser = (data) => {
    setCurrentUser({ ...camelcaseKeys(data) });
  }

  // Triggers a request to the API to send a magic link to the user's email.
  const sendMagicLink = async (email, callback) => {
    try {
      await fetchMagicLink(email);
      updateCurrentUser({ ...currentUser, email });
      callback(true);
    } catch (e) {
      callback(false, e.message);
    }
  };

  // Triggers a request to the API to verify the session token.
  const authenticateUser = async () => {
    try {
      const currentUserResponse = await fetchCurrentUser();
      const responseJSON = await currentUserResponse.json();

      if (currentUserResponse.status !== 200) {
        throw (new Error('Bad request'));
      }

      updateCurrentUser({ ...responseJSON, isAuthenticated: true });
    } catch (e) {
      updateCurrentUser({
        isAuthenticated: false,
        email: null,
      });
    }
  };

  // Triggers a request to the API to verify the user's email.
  const verifyOneTimePassCode = async (token, email, callback) => {
    await signOutCurrentUser();

    try {
      const responseJSON = await fetchVerification(token, email);
      updateCurrentUser({ ...responseJSON, isAuthenticated: true });
      callback(true);
    } catch (e) {
      updateCurrentUser({ isAuthenticated: false });
      callback(false, e.message);
    }
  };

  // Trigger a request to the API to sign out the user.
  const signOutCurrentUser = async () => {
    try {
      await fetchSignOut();
      updateCurrentUser({ isAuthenticated: false });
    } catch (e) {
      window.alert('Something went wrong');
    }
  }

  // Trigger a request to the API to sign out the user.
  const refetchUser = async () => {
    try {
      const currentUserResponse = await fetchCurrentUser();
      const responseJSON = await currentUserResponse.json();

      if (currentUserResponse.status !== 200) {
        throw (new Error('Bad request'));
      }
      updateCurrentUser({ ...responseJSON, isAuthenticated: currentUser.isAuthenticated });
    } catch (e) {
      window.alert('Something went wrong');
    }
  }
  
  const deleteAccount = async () => {
    try {
      await fetchDeleteAccount();
      updateCurrentUser({ isAuthenticated: false });
    } catch (e) {
      window.alert('Something went wrong');
    }
  }


  const value = {
    currentUser,
    sendMagicLink,
    verifyOneTimePassCode,
    fetchCurrentUser,
    refetchUser,
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
