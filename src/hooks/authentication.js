import { useContext, createContext, useState } from 'react';

const AuthContext = createContext();

export const authProvider = {
  isAuthenticated: false,
  signin(callback: VoidFunction) {
    authProvider.isAuthenticated = true;
    setTimeout(callback, 100);
  },
  signout(callback: VoidFunction) {
    authProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

function getCurrentUser() {
  return localStorage.getItem('CURRENT_USER');
}

export function useCurrentUser() {
  const [currentUser, setCurrentUserValue] = useState(getCurrentUser());

  function setCurrentUser(value) {
    localStorage.setItem('CURRENT_USER', value);
    setCurrentUserValue(value);
  }

  return [currentUser, setCurrentUser];
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useCurrentUser();

  const signin = (newUser: string, callback: VoidFunction) => {
    return authProvider.signin(() => {
      setCurrentUser(newUser);
      callback();
    });
  };

  const signout = (callback) => {
    return authProvider.signout(() => {
      setCurrentUser(null);
      callback();
    });
  };

  const value = { currentUser, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
