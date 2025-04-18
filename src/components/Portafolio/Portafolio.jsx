import React from 'react';
import Tarjeta from '../tarjeta/tarjeta';

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
        imagen: '../../../imgs/caezFrontend.png',
    },
    {
        "nombre": "Sistema de Control de Pagos - Backend",
        "descripcion": "API RESTful del Sistema de Control de Pagos, desarrollada con Node.js, Express y SQL Server para administrar datos de pagos de manera eficiente.",
        "tecnologias": [
            "Node.js",
            "Express",
            "SQL Server"
        ],
        imagen: '../../../imgs/BackendREAL.jpg'
    },
    {
        "nombre": "Pagina Estatica de practica del Bootcamp sobre recetas",
        "descripcion": "Pagina estatica de practica del Bootcamp de Frontend usando tecnologias como HTML, CSS y bootstrap, donde solo se muestra la receta, ademas solo era de hacer una replica de algo pero yo la hice un poquito mas como me gustaria para que no se viera tan basica.",
        "tecnologias": [
            "HTML",
            "CSS",
            "Bootstrap"
        ],
        imagen: '../../../imgs/recetas.png',
        link: 'https://jeffreymardoqueo-17.github.io/Recetario-Practica/'
    },
    {
        "nombre": "Ejercicio de frontend, pagina de musica KodigoMusic",
        "descripcion": "Ejercicio para practicar fornted, enlistado de musicas, busqueda de musicas, filtracion, reproduccion, responsive .",
        "tecnologias": [
            "Nextjs",
            "Typescript",
            "Tailwindcss"
        ],
        imagen: '../../../imgs/recetas.png',
        link: 'https://jeffreymardoqueo-17.github.io/Recetario-Practica/'
    },
];

const desarrollo = [
    {
        "nombre": "Busca Fácil",
        "descripcion": "\"Busca Fácil\" es una plataforma pensada a nivel nacional para conectar a clientes y proveedores de servicios, optimizando el tiempo y mejorando la experiencia de agendamiento y compra. El proyecto incluye un sistema de citas que permite a los usuarios reservar servicios como masajes, reparaciones, y más, sin necesidad de desplazarse. Además, cuenta con un marketplace donde los usuarios pueden comprar y vender productos, y una sección de cotizaciones que permite a los clientes solicitar precios de productos o servicios sin necesidad de visitar los locales físicos.",
        "tecnologias": [
            "Next.js",
            "Tailwind CSS",
            "TypeScript",
            "Nest.js",
            "MySQL"
        ],
        "imagen": "../../../imgs/BackendREAL.jpg",
        "funcionalidades": [
            "Agendamiento de citas: Los usuarios pueden reservar servicios que los locales ofrecen.",
            "Marketplace: Espacio para la compra y venta de productos entre usuarios.",
            "Sistema de cotizaciones: Los usuarios pueden cotizar productos o servicios directamente en la plataforma, sin necesidad de acudir a los locales físicos, recibiendo precios y detalles de manera digital."
        ]
    },
    {
        "nombre": "Landing Page Digital Work",
        "descripcion": "Landing Page de servicios de estampados (camisas, tasas, gorras, llaveros, etc) para el local Digital Work, construida react.js y tailwind css para una experiencia fluida y receptiva.",
        "tecnologias": [
            "Vite",
            "CSS",
            "Tailwind CSS",
            "React.js"
        ],
        imagen: '../../../imgs/digitalWork.png',
        link: 'https://github.com/JeffreyMardoqueo-17/Digital-Work.git'
    }

];

const Portafolio = () => {
    return (
        <section id="portafolio" className="container mx-auto p-4">
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
                                link={proyecto.link} // Se pasa el link al componente Tarjeta
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
                                link={proyecto.link}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portafolio;
