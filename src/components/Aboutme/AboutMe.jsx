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
                        <p className="mt-4 dark:text-gray-100 text-justify">
                            Actualmente soy un estudiante con grandes ambiciones de crecer en el ámbito del desarrollo de software. Mi objetivo es ser arquitecto de software. Tengo 18 años y siempre busco estar aprendiendo cosas nuevas y esforzándome por lo que quiero.
                        </p>
                        <p className="mt-4 dark:text-gray-100 text-justify">
                            <strong>Cualidades:</strong> Perseverante, detallista y proactivo. Me esfuerzo por mantenerme actualizado con las últimas tecnologías y mejores prácticas en el desarrollo de software.
                        </p>
                        <p className="mt-4 dark:text-gray-100 text-justify">
                            <strong>Habilidades sociales:</strong>
                            <ul className="list-disc list-inside text-justify">
                                <li>Soy colaborador y me gusta trabajar en equipo.</li>
                                <li>Disfruto resolviendo problemas y encontrando soluciones eficientes.</li>
                                <li>Tengo habilidades de liderazgo y me esfuerzo por motivar a mi equipo a alcanzar sus objetivos.</li>
                                <li>Soy empático y me esfuerzo por entender las perspectivas de los demás.</li>
                                <li>Tengo una actitud positiva y trato de inspirar a los demás con mi entusiasmo.</li>
                                <li>Soy un buen comunicador y me aseguro de que todos en el equipo estén alineados y comprendan sus roles y tareas.</li>
                                <li>Soy flexible y me adapto bien a diferentes situaciones y cambios.</li>
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
