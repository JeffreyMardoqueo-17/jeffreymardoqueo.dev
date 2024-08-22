import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Welcome = () => {
    return (
        <section id="home" className="pt-10 overflow-hidden dark:bg-darkPurple bg-lightPurple md:pt-0 sm:pt-16 2xl:pt-16 h-full container">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 md:grid-cols-2 select-none">
                    <div>
                        <h2 className="text-3xl font-bold leading-tight dark:text-white text-darkPurple sm:text-4xl lg:text-5xl">
                            Hey 👋 soy
                            <br className="block sm:hidden" /> <span className='text-hoverBG'>Jeffrey </span>
                        </h2>
                        <p className="max-w-lg mt-3 text-xl leading-relaxed text-darkPurple dark:text-lightPurple md:mt-8 mb-10">
                            Desarrollador frontend en React, aprendiendo constantemente para ser Desarrollador Full-Stack en .NET, disfruto creando productos dinámicos y creativos de principio a fin. Te invito a revisar mis proyectos!
                        </p>
                        <div className="flex gap-4 mt-10">
                            <a href="/Document/Jeffrey_Mardoqueo_CV.pdf" download className="bg-darkPurple dark:bg-hoverBG hover:bg-blue-700 text-white font-bold py-2 px-4 rounded visited:bg-darkPurple visited:bg-hoverBG select-none">
                                Descargar currículum
                            </a>
                            <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-800 dark:bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded">
                                <FaGithub size={20} />
                                GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/tuusuario/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-700 dark:bg-blue-600 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                                <FaLinkedin size={20} />
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    <div className="relative mt-9">
                        <img className="absolute inset-x-0 bottom-0 -mb-12 -translate-x-1/2 left-1/2" src="/imgs/Vector.svg" alt="" />
                        <img className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="/imgs/FOOTOO.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Welcome;
