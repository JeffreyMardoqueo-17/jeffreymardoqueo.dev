import React, { useState, useEffect } from 'react';
import Menu from './components/Menu/Menu';
import Welcome from './components/welcome/welcome';
import AboutMe from './components/Aboutme/AboutMe';
import Estudio from './components/Estudio/Estudio';
import MenuInferior from './components/ManuInferior/MenuInferior'
import useMediaQuery from './hooks/useMediaQuery';

// import TechnologiesPage from './Pages/TechnologiesPage';
import TechnologiesPage from './Pages/TechnologiesPage';
import Portafolio from './components/Portafolio/Portafolio';

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);

    theme === 'dark'? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className="flex flex-col md:flex-row">
      {!isMobile && (
        <div className="w-20 h-screen fixed overflow-y-auto">
          <Menu toggleTheme={toggleTheme} theme={theme} />
        </div>
      )}
      <div className={isMobile ? "flex-1 h-full flex justify-center items-top bg-lightPurple dark:bg-darkPurple" : "flex-1 ml-0 h-full flex justify-center items-top bg-lightPurple dark:bg-darkPurple"}>
        <div className="flex flex-col ml-2">
          <Welcome />
          <AboutMe />
          <Estudio />
          <TechnologiesPage />
          <Portafolio />
          <div className='mt-16'>
            {isMobile && (
              <MenuInferior toggleTheme={toggleTheme} theme={theme}/>
            )}
          </div>
          {isMobile && (
            <MenuInferior />
          )}

        </div>
      </div>
    </div>
  );
};

export default App;
