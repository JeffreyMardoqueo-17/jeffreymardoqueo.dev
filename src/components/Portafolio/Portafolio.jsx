import React from 'react';
import Tarjeta from '../tarjeta/tarjeta'

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

const desarrollo = [
    {
        "nombre": "AgendameSV",
        "descripcion": "AGENDAMESV es una aplicación innovadora diseñada para conectar microempresas y profesionales independientes con usuarios que buscan servicios a domicilio o en el local del proveedor. Esta plataforma facilita la programación de citas y la gestión de servicios en sectores como estilistas, maestros, técnicos, entre otros.",
        "tecnologias": [
            ".NET MAUI",
            "BLAZOR",
            "Tailwind CSS",
            "SQL Server",
            "Entity Framework"
        ],
        imagen: '../../../public/imgs/BackendREAL.jpg'
    }
];

const Portafolio = () => {
    return (
        <div id="portafolio" className="container mx-auto p-4">
            {/* Sección de Proyectos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Proyectos Completos */}
                <div>
                    <h2 className="text-3xl text-center mb-10 font-bold leading-tight dark:text-white text-darkPurple sm:text-4xl lg:text-5xl">Proyectos
                        <br className="block sm:hidden" /> <span className='text-hoverBG'>Completos </span>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
                        {proyectos.map((proyecto, index) => (
                            <Tarjeta
                                key={index}
                                imagen={proyecto.imagen}
                                nombre={proyecto.nombre}
                                descripcion={proyecto.descripcion}
                                tecnologias={proyecto.tecnologias}
                            />
                        ))}
                    </div>
                </div>

                {/* Proyectos en Desarrollo */}
                <div>
                    <h2 className="text-3xl text-center mb-10 font-bold leading-tight dark:text-white text-darkPurple sm:text-4xl lg:text-5xl">Proyectos en
                        <br className="block sm:hidden" /> <span className='text-hoverBG'>Desarrollo </span>
                    </h2>

                    <div className="grid grid-cols-1 gap-4">
                        {desarrollo.map((proyecto, index) => (
                            <Tarjeta
                                key={index}
                                imagen={proyecto.imagen}
                                nombre={proyecto.nombre}
                                descripcion={proyecto.descripcion}
                                tecnologias={proyecto.tecnologias}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portafolio;
