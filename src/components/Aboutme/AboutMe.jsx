import React, { useState } from 'react';

const aboutMeData = {
    description: "Actualmente soy un estudiante con grandes ambiciones de crecer en el ámbito del Desarrollo de software. Mi objetivo es ser arquitecto de software. Tengo 18 años y siempre busco estar aprendiendo cosas nuevas y esforzándome por lo que quiero.",
    qualities: "Perseverante, detallista y proactivo. Me esfuerzo por mantenerme actualizado con las últimas tecnologías y mejores prácticas en el desarrollo de software.",

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
                {/* Img Col */}
                <div className="w-full">
                    <img src="/imgs/peer.png" className="rounded-lg mx-auto" />
                </div>
                <div className="w-ful rounded-lg opacity-75 ">
                    <div className="text-center lg:text-left p-2">
                        {/* Image for mobile view */}
                        <div className="block lg:hidden rounded-full mx-auto h-32 w-32 bg-cover bg-center" style={{ backgroundImage: "url('/imgs/peer.png')" }}></div>
                        <h2 className="text-3xl text-center mb-10 font-bold leading-tight dark:text-white text-darkPurple sm:text-4xl lg:text-5xl">Sobre
                            <br className="block sm:hidden" /> <span className='text-hoverBG'>Mi </span>
                        </h2>
                        <p className="mt-4 text-gray-900 dark:text-gray-100 text-justify">
                            {aboutMeData.description}
                        </p>
                        <p className="mt-4 dark:text-gray-100 text-justify">
                            <strong className='dark:text-white'>Calidades:</strong> {aboutMeData.qualities}
                        </p>
                        <p className="mt-4 text-justify">
                        </p>
                        <p className="mt-4 dark:text-gray-100 text-justify">
                            {aboutMeData.additionalInfo}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
