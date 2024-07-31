import React from 'react';

const Tarjeta = ({ imagen, nombre, descripcion, tecnologias }) => {
    return (
        <div className="border dark:border-slate-600 rounded-lg overflow-hidden shadow-md dark:bg-slate-900 dark:bg-opacity-50 backdrop-filter backdrop-blur-md max-w-[80%] min-h-[450px] mx-auto flex flex-col">
            <img src={imagen} alt={nombre} className="w-full h-48 object-cover" />
            <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-xl font-bold mb-2 text-redPasion">{nombre}</h2>
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
