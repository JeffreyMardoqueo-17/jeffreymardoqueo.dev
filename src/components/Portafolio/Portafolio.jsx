import React from 'react';

// Array de proyectos
const proyectos = [
    {
        nombre: 'Sistema de Gestión de Proyectos',
        descripcion: 'Un sistema de gestión de proyectos que permite a los usuarios crear, organizar y supervisar proyectos de manera eficiente. Incluye funcionalidades para asignar tareas, hacer seguimiento del progreso y colaborar en equipo.',
        imagen: 'https://luna1.co/16e4e2.png',
        tecnologias: ['React', 'Tailwind CSS', 'Node.js']
    },
    {
        nombre: 'Dashboard de Administración',
        descripcion: 'Un dashboard de administración para visualizar y analizar datos relacionados con la gestión de proyectos. Proporciona gráficos interactivos, informes detallados y una interfaz fácil de usar.',
        imagen: 'https://miro.medium.com/v2/resize:fit:1400/1*SvtF4kmd8mKZdQ6hLLMh8w.jpeg',
        tecnologias: ['HTML', 'CSS', 'JavaScript']
    },
    {
        nombre: 'Plataforma de E-learning',
        descripcion: 'Una plataforma de aprendizaje en línea que ofrece cursos interactivos, videos educativos y evaluaciones. Los usuarios pueden aprender a su propio ritmo y obtener certificados al completar los cursos.',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShDJht-hBZFyfGCdGOVVyE5uv9gVJ5ygGi9XvGwDtitw&s',
        tecnologias: ['React', 'Node.js', 'MongoDB']
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
