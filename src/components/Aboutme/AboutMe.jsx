import React, { useState } from 'react';

const aboutMeData = {
    description: "Actualmente soy un estudiante con grandes ambiciones de crecer en el ámbito del Desarrollo de software. Mi objetivo es ser arquitecto de software. Tengo 18 años y siempre busco estar aprendiendo cosas nuevas y esforzándome por lo que quiero.",
    qualities: "Perseverante, detallista y proactivo. Me esfuerzo por mantenerme actualizado con las últimas tecnologías y mejores prácticas en el desarrollo de software.",
    socialSkills: [
        "Soy colaborador y me gusta trabajar en equipo.",
        "Disfruto resolviendo problemas y encontrando soluciones eficientes."
    ],
    additionalInfo: "Aquí puedes ver más adelante parte de mis conocimientos. ¡CONTINÚA VIENDO MI PORTAFOLIO!"
};

const AboutMe = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`font-sans antialiased leading-normal mt-2 tracking-wider min-h-0 flex items-center justify-center py-6`}>
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center h-auto gap-4 rounded-lg">
                <div className="w-ful rounded-lg opacity-75 ">
                    <div className="text-center lg:text-left p-2">
                        {/* Image for mobile view */}
                        <div className="block lg:hidden rounded-full mx-auto h-32 w-32 bg-cover bg-center" style={{ backgroundImage: "url('/imgs/peer.png')" }}></div>
                        <h1 className='text-3xl font-bold mb-10 text-redPasion'>Sobre Mi</h1>
                        {/* Rest of the content... */}
                        <p className="mt-4 text-gray-900 dark:text-gray-100 text-justify">
                            {aboutMeData.description}
                        </p>
                        <p className="mt-4 dark:text-gray-100 text-justify">
                            <strong className='dark:text-white'>Calidades:</strong> {aboutMeData.qualities}
                        </p>
                        <p className="mt-4 text-justify">
                            <h1 className='text-3xl font-bold mb-10 text-redPasion'>Habilidades Sociales</h1>
                            <ul className="space-y-4 text-left text-black dark:text-gray-100">
                                {aboutMeData.socialSkills.map((skill, index) => (
                                    <li key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                                        <svg className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                        </svg>
                                        <span>{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </p>
                        <p className="mt-4 dark:text-gray-100 text-justify">
                            {aboutMeData.additionalInfo}
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
