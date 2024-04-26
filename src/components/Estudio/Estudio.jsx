import React from 'react';

const Estudio = () => {
    return (
        <div className='ml-2'>
            <h1 className='text-3xl font-bold mb-5 text-redPasion'>Educacion Superior</h1>
            <ol class="relative border-s ml-9 border-hoverBG">
                <li class="mb-10 ms-4">
                    <div class="absolute w-3 h-3 bg-rojoClaro rounded-full mt-1.5 -start-1.5 border border-hoverBG "></div>
                    <time class="mb-1 text-xl font-normal leading-none text-rojoClaro">ESFE/AGAPE 2023 - 2024</time>
                    <h3 class="text-2xl font-semibold text-darkPurple dark:text-lightPurple">Técnico En Ingeniería de Desarrollo de Software</h3>
                    <p class="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">Diseñar, desarrollar y mantener software, asegurando su correcto funcionamiento y adaptándolo a las necesidades de los usuarios.</p>
                </li>
            </ol>
             <h1 className='text-3xl font-bold mb-5 text-redPasion'>Otros</h1>
            <ol class="relative border-s ml-9 border-hoverBG">
                <li class="mb-10 ms-4">
                    <div class="absolute w-3 h-3 bg-rojoClaro rounded-full mt-1.5 -start-1.5 border border-hoverBG "></div>
                    <time class="mb-1 text-xl font-normal leading-none text-rojoClaro">TPC Sonsonate, 2022</time>
                    <h3 class="text-2xl font-semibold text-darkPurple dark:text-lightPurple">Técnico Programador Analista de Sistemas</h3>
                    <p class="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">Diseñar, desarrollar, implementar y mantener sistemas informáticos</p>
                </li>
                <li class="mb-10 ms-4">
                    <div class="absolute w-3 h-3 bg-rojoClaro rounded-full mt-1.5 -start-1.5 border border-hoverBG "></div>
                    <time class="mb-1 text-xl font-normal leading-none text-rojoClaro">TPC Sonsonate, 2021</time>
                    <h3 class="text-2xl font-semibold text-darkPurple dark:text-lightPurple">Técnico Operador en Windows</h3>
                    <p class="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">Administración y operación de sistemas Windows, manejo de programas del paquete de Office.</p>
                </li>
            </ol>
        </div>
    );
}
export default Estudio;