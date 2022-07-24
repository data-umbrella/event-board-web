import { useContext, createContext, useState } from 'react';
import { MAGIC_LINK_URL, VERIFY_URL, CURRENT_USER_URL } from 'constants/urls';

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
        throw(new Error('Bad request'));
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
      const verifyResponse = await fetch(VERIFY_URL, {
        method: 'POST',
        body: JSON.stringify({ token, email }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (verifyResponse.status !== 200) {
        throw(new Error('Bad request'));
      }

      const verifyJson = await verifyResponse.json();
      const currentUserResponse = await fetch(CURRENT_USER_URL, {
        method: 'POST',
        credentials: 'include',
        mode: 'cors',
        body: JSON.stringify({}),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${verifyJson.token}`,
        },
      });

      if (verifyResponse.status !== 200) {
        throw(new Error('Bad request'));
      }

      const user = await currentUserResponse.json();

      setCurrentUser({ ...user });
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
