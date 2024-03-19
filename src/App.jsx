import React, { useEffect, useState } from 'react';
import Menu from './Menu/Menu';

const App = () => {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia(`(prefers-color-scheme: dark)`).matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html').classList.add('dark');
    } else {
      document.querySelector('html').classList.remove('dark');
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="flex">
      {/* Menú con ancho fijo de 400px */}
      <div className="w-64 h-screen overflow-y-auto">
        <Menu />
      </div>
      {/* Contenido restante */}
      <div className="flex-1 h-screen flex justify-center items-center bg-lightPurple dark:bg-darkPurple">
        <button
          className="bg-slate-400 px-4 py-2 rounded hover:bg-purple-400"
          onClick={handleChangeTheme}
        >
          Cambiar tema
        </button>
      </div>
    </div>
  );
};

export default App;
