import React from 'react';
import { FaLink } from "react-icons/fa6";

const Tarjeta = ({ imagen, nombre, descripcion, tecnologias, link }) => {
    return (
        <div className="border dark:border-slate-600 rounded-lg overflow-hidden shadow-md dark:bg-slate-900 dark:bg-opacity-50 backdrop-filter backdrop-blur-md max-w-[8 0%] min-h-[400px] mx-auto flex flex-col">
            <img src={imagen} alt={nombre} className="w-full h-[50%] object-cover" />
            <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-xl font-bold text-redPasion">{nombre}</h2>
                    {link && (
                        <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-redPasion transition-colors">
                            <FaLink size={35} />
                        </a>
                    )}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-2 flex-grow">{descripcion}</p>
                <div className="flex flex-wrap">
                    {tecnologias.map((tecnologia, index) => (
                        <span key={index} className="bg-gray-300 rounded-full px-2 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2">{tecnologia}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Tarjeta;
