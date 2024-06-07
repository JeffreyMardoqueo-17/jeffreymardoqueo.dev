import React, { useState } from 'react';

const AboutMe = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`font-sans antialiased leading-normal tracking-wider min-h-0 flex items-center justify-center`}>
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center h-auto gap-4 rounded-lg">

                <div id="profile" className="w-full  rounded-lg opacity-75 ">
                    <div className="text-center lg:text-left p-2">
                        {/* Image for mobile view */}
                        <div className="block lg:hidden rounded-full mx-auto h-32 w-32 bg-cover bg-center" style={{ backgroundImage: "url('/imgs/peer.png')" }}></div>
                        <h1 className='text-3xl font-bold mb-5 text-redPasion'>Sobre mi</h1>
                        {/* Rest of the content... */}

                        <p className="mt-4 ext-gray-900 dark:text-gray-400 text-justify">
                            Actualmente soy un estudiante con grandes ambiciones de crecer en el ámbito del  <strong className="font-semibold text-gray-900 dark:text-white font-bold">Desarrollo de software</strong> Mi objetivo es ser arquitecto de software. Tengo 18 años y siempre busco estar aprendiendo cosas nuevas y esforzándome por lo que quiero.
                        </p>
                        <p className="mt-4 dark:text-gray-100 text-justify">
                            <strong className='dark:text-white'>Calidades:</strong> Perseverante, detallista y proactivo. Me esfuerzo por mantenerme actualizado con las últimas tecnologías y mejores prácticas en el desarrollo de software.
                        </p>

                        <p className="mt-4 dark:text-gray-100 text-justify">
                            <strong>Habilidades sociales:</strong>
                            <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                    <span>Soy colaborador y me gusta trabajar en equipo.</span>
                                </li>
                                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                    <span>Disfruto resolviendo problemas y encontrando soluciones eficientes.</span>
                                </li>
                                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                    <span>Tengo habilidades de liderazgo y me esfuerzo por motivar a mi equipo a alcanzar sus objetivos.</span>
                                </li>
                                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                    <span>Soy empático y me esfuerzo por entender las perspectivas de los demás.</span>
                                </li>
                                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                    <span>Tengo una actitud positiva y trato de inspirar a los demás con mi entusiasmo.</span>
                                </li>
                                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                    <span>Soy un buen comunicador y me aseguro de que todos en el equipo estén alineados y comprendan sus roles y tareas.</span>
                                </li>
                                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                                    <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                    <span>Soy flexible y me adapto bien a diferentes situaciones y cambios.</span>
                                </li>
                            </ul>
                        </p>

                        <p className="mt-4 dark:text-gray-100 text-justify">
                            Aquí puedes ver más adelante parte de mis conocimientos. ¡CONTINÚA VIENDO MI PORTAFOLIO!
                        </p>
                    </div>
                </div>
                {/* Img Col */}
                <div className="w-full">
                    <img src="/imgs/peer.png" className="rounded-lg mx-auto" />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
