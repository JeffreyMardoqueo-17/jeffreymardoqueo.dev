import React, { useState, useEffect } from 'react';
import Welcome from './components/welcome/welcome';
import AboutMe from './components/Aboutme/AboutMe';
import Estudio from './components/Estudio/Estudio';
import TechnologiesPage from './Pages/Tecnologies/TechnologiesPage';
import Portafolio from './components/Portafolio/Portafolio';
import useMediaQuery from './hooks/useMediaQuery';
import { MdDarkMode } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";
import { FaUser, FaHome } from "react-icons/fa";
import { MdClass } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { HiBriefcase } from "react-icons/hi2";
// import { scrollToElement } from './scrollSmooth'; // Importa la función
import { scrollToElement } from './funcions/scrollToElement';

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

  const icon = theme === 'dark' ? <MdDarkMode className='w-8 h-8 stroke-current dark:text-white' /> : <WiDaySunny className='w-8 h-8 stroke-current dark:text-white' />;

  const links = [
    { to: 'home', icon: <FaHome className='w-8 h-8 stroke-current dark:text-white' />, tooltip: 'Home' },
    { to: 'aboutme', icon: <FaUser className='w-8 h-8 stroke-current dark:text-white' />, tooltip: 'About Me' },
    { to: 'estudios', icon: <MdClass className='w-8 h-8 stroke-current dark:text-white' />, tooltip: 'Estudios' },
    { to: 'portafolio', icon: <HiBriefcase className='w-8 h-8 stroke-current dark:text-white' />, tooltip: 'Proyectos' },
    { to: 'correo', icon: <SiGmail className='w-8 h-8 stroke-current dark:text-white' />, tooltip: 'Correo' }
  ];

  return (
    <div className="flex">
      {!isMobile && (
        <div className="w-20 h-screen fixed bg-lightPurple dark:bg-darkPurple">
          <div className="flex flex-col items-center p-2">
            <a href="#" onClick={toggleTheme} className="mt-3">
              {icon}
            </a>
            <div className="mt-3 border-t border-gray-700">
              {links.map((link, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-darkPurple dark:hover:bg-hoverBG cursor-pointer"
                  onClick={() => scrollToElement(link.to)}
                >
                  {link.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className={`flex-1 ${!isMobile ? 'ml-20' : ''} h-screen overflow-y-auto dark:bg-darkPurple`}>
        <div className="flex flex-col items-center">
          <div id="home" className="section">
            <Welcome />
          </div>
          <div id="aboutme" className="section">
            <AboutMe />
          </div>
          <div id="estudios" className="section">
            <Estudio />
          </div>
          <div id="portafolio" className="section">
            <TechnologiesPage />
          </div>
          <div id="correo" className="section">
            <Portafolio />
          </div>
        </div>
        {isMobile && (
          <div className="fixed bottom-0 left-0 w-full bg-lightPurple dark:bg-slate-900 dark:bg-opacity-50 backdrop-filter backdrop-blur-md">
            <div className="flex justify-center p-2 space-x-6">
              <a href="#" onClick={toggleTheme} className=''>
                {icon}
              </a>
              {links.map((link, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-darkPurple dark:hover:bg-hoverBG cursor-pointer"
                  onClick={() => scrollToElement(link.to)}
                >
                  {link.icon}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
