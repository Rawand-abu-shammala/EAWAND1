// useAuth.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = userData => {
    // Perform login logic and set user data
  };

  const signup = userData => {
    // Perform signup logic and set user data
  };

  const logout = () => {
    // Perform logout logic and clear user data
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
