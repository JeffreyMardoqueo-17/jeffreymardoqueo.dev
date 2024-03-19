import React, { useEffect, useState } from 'react';
import Menu from './components/Menu/Menu';
import Welcome from './components/welcome/welcome';

const App = () => {

  return (
    <div className="flex">
      {/* Menú con ancho fijo de 400px */}
      <div className="w-20 h-screen fixed overflow-y-auto">
        <Menu />
      </div>
      {/* Contenido restante */}
      <div className="flex-1 ml-20 h-full flex justify-center items-top bg-lightPurple dark:bg-darkPurple">
       <Welcome />
      </div>
    </div>
  );
};

export default App;
