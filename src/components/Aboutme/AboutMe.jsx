import React, { useState } from 'react';
import './AboutMe.css';
const aboutMeData = {
    description: "Soy un desarrollador de software especializado en .NET, con experiencia en desarrollo full-stack utilizando MVC y arquitectura en N-capas. Estoy buscando mi primer trabajo en el área y tengo muchas ganas de crecer y aportar. Me gusta liderar, guiar y colaborar en proyectos donde pueda compartir mis ideas, aprender de los demás y siempre buscar la mejor solución de manera humilde.",
    qualities: "Creo en el trabajo en equipo y en la importancia de aprender tanto de mis compañeros como de mis errores. Me enfoco en crecer como profesional mientras mantengo una actitud abierta y respetuosa hacia todos los desafíos.",
    // additionalInfo: "Te invito a explorar mi portafolio para conocer más sobre mis proyectos. ¡Estoy listo para empezar esta nueva etapa y seguir aprendiendo!"
};


const AboutMe = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div id="aboutme" className={`leading-normal mt-2 tracking-wider min-h-0 flex items-center justify-center py-6`}>
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center h-auto gap-4 rounded-lg">
                {/* Imagen principal y fondo ocultos en móvil */}
                <div className="hidden w-full lg:block">
                    <img src="/imgs/peer.png" className="rounded-lg mx-auto" alt="Imagen de perfil" />
                </div>
                <div className="hidden w-full lg:hidden gradient-overlay rounded-full mx-auto h-32 w-32 bg-cover bg-center" style={{ backgroundImage: "url('/imgs/peer.png')" }}>
                </div>

                <div className="w-full lg:col-span-1 rounded-lg opacity-75">
                    <div className="text-center lg:text-left p-2">
                        <h2 className="text-3xl font-bold leading-tight dark:text-white text-black sm:text-4xl lg:text-5xl">Sobre
                            <br className="block sm:hidden" /> <span className=' text-hoverBG'>Mi </span>
                        </h2>
                        <p className="mt-4 text-gray-900 dark:text-gray-100 text-justify">
                            {aboutMeData.description}
                        </p>
                        <p className="mt-4 dark:text-gray-100 text-justify">
                            <strong className='dark:text-white'>Calidades:</strong> {aboutMeData.qualities}
                        </p>
                        <p className="mt-4 text-justify">
                        </p>
                        <p className="mt-4 dark:text-gray-100 text-justify text-redPasion font-bold">
                            {aboutMeData.additionalInfo}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
