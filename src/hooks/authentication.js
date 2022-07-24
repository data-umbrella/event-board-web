import { useContext, createContext, useState } from 'react';
import { MAGIC_LINK_URL, VERIFY_URL } from 'constants/urls';

const AuthContext = createContext();

// export const authProvider = {
//   isAuthenticated: false,
//   signin(callback) {
//     authProvider.isAuthenticated = true;
//     callback();
//   },
//   signout(callback) {
//     authProvider.isAuthenticated = false;
//     setTimeout(callback, 100);
//   },
// };

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({});

  const sendMagicLink = async (email, callback) => {
    try {
      const response = await fetch(MAGIC_LINK_URL, {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status !== 200) {
        throw('Bad request');
      }

      const newUser = { email };
      setCurrentUser({ ...{ newUser } });
      window.localStorage.setItem('USERNAME', email);

      callback(true, '');
    } catch (e) {
      callback(false, e.message);
    }
  };

  const verifyOneTimePassCode = async (token, callback) => {
    const email = window.localStorage.getItem('USERNAME');

    try {
      const response = await fetch(VERIFY_URL, {
        method: 'POST',
        body: JSON.stringify({ token, email }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status !== 200) {
        throw('Bad request');
      }
      const json = await response.json();
      const newUser = { email, token: json.token };
      setCurrentUser({ ...{ newUser } });
      callback(true);
    } catch (e) {
      callback(false, e.message);
    }
  };

  const value = { currentUser, sendMagicLink, verifyOneTimePassCode };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
