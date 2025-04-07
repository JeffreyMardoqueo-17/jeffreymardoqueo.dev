import React from 'react';

const educacionSuperior = [
    {
        Time: 'ESFE/AGAPE 2023-2024',
        Titulo: 'Técnico En Ingeniería de Desarrollo de Software',
        Descripcion: 'Programación .NET - Bases de datos - Desarrollo web - APIs RESTful - Control de versiones - Metodologías ágiles - Diseñar, desarrollar y mantener software, asegurando su correcto funcionamiento y adaptándolo a las necesidades de los usuarios'
    },
    {
        Time: 'Kodigo 2024 - 2025',
        Titulo: 'Desarrollador Full Stack Junior',
        Descripcion: 'Desarrollo de aplicaciones web · TypeScript· React · PHP · Laravel · MySQL · Metodología ágil Scrum · Trabajo en equipo '
    }
];

const otros = [
    {
        Time: 'TPC Sonsonate, 2022',
        Titulo: 'Analista programador de Sistemas',
        Descripcion: 'Desarrollo de sistemas · Análisis de sistemas · Lógica de programación · Implementación · Mantenimiento de software.'
    },
    {
        Time: 'TPC Sonsonate, 2021',
        Titulo: 'Técnico Operador en Windows',
        Descripcion: 'Administración de sistemas Windows · Manejo avanzado de Office '
    },
    {
        Time: 'Udemy, 2024',
        Titulo: 'Curso de Desarrollo Web Completo',
        Descripcion: 'Aprendí habilidades de desarrollo frontend y backend, incluyendo HTML, CSS, JavaScript, Node.js y SQL server.'
    },
];

const Estudio = () => {
    return (
        <div id="estudios" className='container mx-auto h-full'>
            <div className='ml-2 grid grid-cols-1 lg:grid-cols-2 gap-4 select-none h-full'>
                <div>
                    <h1 className='text-3xl font-bold mb-10 text-redPasion'>Educacion Superior</h1>
                    <ol className="relative border-s ml-9 border-hoverBG">
                        {educacionSuperior.map((edu, index) => (
                            <li key={index} className="mb-auto ms-4">
                                <div className="absolute w-3 h-3 bg-rojoClaro rounded-full mt-1.5 -start-1.5 border border-hoverBG"></div>
                                <time className="mb-1 text-xl font-normal leading-none text-rojoClaro">{edu.Time}</time>
                                <h3 className="text-2xl font-semibold text-darkPurple dark:text-lightPurple">{edu.Titulo}</h3>
                                <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">{edu.Descripcion}</p>
                            </li>
                        ))}
                    </ol>
                </div>
                <div>
                    <h1 className='text-3xl font-bold mb-10  text-redPasion'>Otros</h1>
                    <ol className="relative border-s ml-9 border-hoverBG">
                        {otros.map((otro, index) => (
                            <li key={index} className="mb-auto ms-4">
                                <div className="absolute w-3 h-3 bg-rojoClaro rounded-full mt-1.5 -start-1.5 border border-hoverBG"></div>
                                <time className="mb-1 text-xl font-normal leading-none text-rojoClaro">{otro.Time}</time>
                                <h3 className="text-2xl font-semibold text-darkPurple dark:text-lightPurple">{otro.Titulo}</h3>
                                <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">{otro.Descripcion}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Estudio;
