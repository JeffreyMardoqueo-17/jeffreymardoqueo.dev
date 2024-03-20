import React, { useState } from 'react';
import Menu from './components/Menu/Menu';
import Welcome from './components/welcome/welcome';
import AboutMe from './components/Aboutme/AboutMe';
import  {Estudio}  from './components/Estudio/Estudio';

const App = () => {
  const [theme, setTheme] = useState(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Menú con ancho fijo de 400px */}
      <div className="w-20 h-screen fixed overflow-y-auto">
        <Menu toggleTheme={toggleTheme} theme={theme} />
      </div>
      {/* Contenido restante */}
      <div className="flex-1 ml-20 h-full flex justify-center items-top bg-lightPurple dark:bg-darkPurple">
        <div className="flex flex-col">
          <Welcome />
          <AboutMe />
          <Estudio />
          {/* Agrega más componentes Welcome aquí si deseas */}
        </div>
      </div>
    </div>
  );
};
export default App;
