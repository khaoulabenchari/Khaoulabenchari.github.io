import { useState } from 'react';

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
}
