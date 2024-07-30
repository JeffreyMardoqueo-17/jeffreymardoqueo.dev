import React from 'react';

// Array de proyectos
const proyectos = [
    {
        "nombre": "Sistema de Control de Pagos - Frontend",
        "descripcion": "Interfaz de usuario del Sistema de Control de Pagos, construida con React.js y Tailwind CSS para una experiencia fluida y receptiva.",
        "tecnologias": [
            "React.js",
            "Tailwind CSS",
            "Material UI",
            "Typescript"
            
        ],
        imagen: 'https://luna1.co/16e4e2.png'
    },
    {
        "nombre": "Sistema de Control de Pagos - Backend",
        "descripcion": "API RESTful del Sistema de Control de Pagos, desarrollada con Node.js, Express y SQL Server para administrar datos de pagos de manera eficiente.",
        "tecnologias": [
            "Node.js",
            "Express",
            "SQL Server"
        ],
        imagen: '../../../public/imgs/BackendREAL.jpg'
    }
];

const Portafolio = () => {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl text-center mb-10 font-bold leading-tight dark:text-white text-darkPurple sm:text-4xl lg:text-5xl">Mis
                <br className="block sm:hidden" /> <span className=' text-hoverBG'>Proyectos </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
                {proyectos.map((proyecto, index) => (
                    <div key={index} className="border dark:border-slate-600 rounded-lg overflow-hidden shadow-md dark:bg-slate-900 dark:bg-opacity-50 backdrop-filter backdrop-blur-md ">
                        <img src={proyecto.imagen} alt={proyecto.nombre} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-2 text-redPasion">{proyecto.nombre}</h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-2">{proyecto.descripcion}</p>
                            <div className="flex flex-wrap">
                                {proyecto.tecnologias.map((tecnologia, index) => (
                                    <span key={index} className="bg-gray-300 rounded-full px-2 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2">{tecnologia}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portafolio;
