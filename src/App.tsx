import { useState } from 'react';
import { Outlet } from '@tanstack/react-router';
import { ThemeContext } from './context/ThemeContext';
import Navbar from './components/ui/Navbar';
import './styles/App.css';

function App() {
  const [isDark, setIsDark] = useState(() => {
    const theme = sessionStorage.getItem('theme');
    if (theme) return theme === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <div className="container">
        <Navbar /> 
        <Outlet />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;