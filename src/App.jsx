import React, { useState, useEffect } from 'react';
import Menu from './components/Menu/Menu';
import Welcome from './components/welcome/welcome'
import AboutMe from './components/Aboutme/AboutMe';
import Estudio from './components/Estudio/Estudio';
import MenuInferior from './components/ManuInferior/MenuInferior';
import useMediaQuery from './hooks/useMediaQuery';
import TechnologiesPage from './Pages/Tecnologies/TechnologiesPage';
import Portafolio from './components/Portafolio/Portafolio';
import Contact from './Pages/contact/Contact';

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);

    theme === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className="flex">
      {!isMobile && (
        <div className="w-20 h-screen fixed bg-green-300">
          <Menu toggleTheme={toggleTheme} theme={theme} />
        </div>
      )}
      <div className={`flex-1 ${!isMobile ? 'ml-20' : ''} h-screen overflow-y-auto dark:bg-darkPurple`}>
        <div className="flex flex-col items-center">
          <Welcome />
          <AboutMe />
          <Estudio />
          <TechnologiesPage />
          <Portafolio />
          {/* <Contact /> */}
          {isMobile && <MenuInferior toggleTheme={toggleTheme} theme={theme} />}
        </div>
      </div>
    </div>
  );
};

export default App;
