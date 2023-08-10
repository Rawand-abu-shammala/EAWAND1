import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { useThemeContext } from '../hooks/useThemeContext';
import { PATHS } from '../constants';

const Home = () => {
  const { user } = useAuth();
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div>
      <h1>Home</h1>
      {user && <p>Welcome, {user.username}!</p>}
      <button onClick={toggleTheme}>
        Toggle Theme ({theme === 'light' ? 'Dark' : 'Light'})
      </button>
    </div>
  );
};

export default Home;
