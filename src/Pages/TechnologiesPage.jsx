import { IoLogoJavascript } from "react-icons/io5";
import { SiCsharp } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import React, { useState } from 'react';

const TechnologiesPage = () => {
    const [selectedTech, setSelectedTech] = useState(null);

    const handleIconClick = (techName) => {
        setSelectedTech(techName === selectedTech ? null : techName);
    };
    const frontend = [
        { name: 'JavaScript', icon: <IoLogoJavascript className="text-warning-500 w-24 h-24 absolute inset-0 m-auto" /> },
        { name: 'React', icon: <FaReact className="text-blue-600 w-24 h-24 absolute inset-0 m-auto" /> },
        { name: 'HTML', icon: <FaHtml5 className="text-orange-500 w-24 h-24 absolute inset-0 m-auto" /> },
        { name: 'Sass', icon: <FaSass className="text-pink-500 w-24 h-24 absolute inset-0 m-auto" /> },
        { name: 'Tailwindcss', icon: <SiTailwindcss className="text-blue-500 w-24 h-24 absolute inset-0 m-auto" /> },
        { name: 'CSS', icon: <FaCss3Alt className="text-blue-600 w-24 h-24 absolute inset-0 m-auto" /> },
        { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-800 w-24 h-24 absolute inset-0 m-auto" /> },
        { name: 'C Sharp', icon: <SiCsharp className="text-purple-700 w-24 h-24 absolute inset-0 m-auto" /> },
    ]
    const technologies = [
        { name: 'GitHub', icon: <FaGithub className="bg-black text-white w-24 h-24 rounded-full p-3 absolute inset-0 m-auto" /> }
    ];
    const backend = [
        { name: 'Node JS', icon: <FaNode className="text-green-600 w-24 h-24 absolute inset-0 m-auto" /> },
        { name: 'SQL Server', icon: <SiMicrosoftsqlserver className="text-red-600 w-24 h-24 absolute inset-0 m-auto" /> },

        { name: 'C Sharp', icon: <SiCsharp className="text-purple-700 w-24 h-24 absolute inset-0 m-auto" /> },
    ]

    return (
        <div className="container mx-auto p-4 dark:bg-slate-900 dark:bg-opacity-50 backdrop-filter backdrop-blur-md rounded-tl-lg shadow-md mb-6" lang="en">

            <div className="container mx-auto p-4 dark:bg-slate-900 dark:bg-opacity-50 backdrop-filter backdrop-blur-md rounded-tl-lg shadow-md mb-6" lang="en">
                <h2 className="text-3xl text-center mb-10 font-bold leading-tight dark:text-white text-darkPurple sm:text-4xl lg:text-5xl">Frontend
                </h2>
                <ul className="grid grid-cols-3 gap-4">
                    {frontend.map((tech, index) => (
                        <li key={index} className="relative group" onClick={() => handleIconClick(tech.name)} onMouseEnter={() => setSelectedTech(tech.name)} onMouseLeave={() => setSelectedTech(null)}>
                            <div className="w-24 h-24 flex items-center justify-center">
                                {tech.icon}
                            </div>
                            {selectedTech === tech.name && (
                                <p aria-hidden="true" className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white bg-gray-600 bg-opacity-75 rounded">{tech.name}</p>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="container mx-auto p-4 dark:bg-slate-900 dark:bg-opacity-50 backdrop-filter backdrop-blur-md rounded-tl-lg shadow-md mb-6" lang="en">
                <h2 className="text-3xl text-center mb-10 font-bold leading-tight dark:text-white text-darkPurple sm:text-4xl lg:text-5xl">Backend
                </h2>
                <ul className="grid grid-cols-3 gap-4">
                    {backend.map((tech, index) => (
                        <li key={index} className="relative group" onClick={() => handleIconClick(tech.name)} onMouseEnter={() => setSelectedTech(tech.name)} onMouseLeave={() => setSelectedTech(null)}>
                            <div className="w-24 h-24 flex items-center justify-center">
                                {tech.icon}
                            </div>
                            {selectedTech === tech.name && (
                                <p aria-hidden="true" className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white bg-gray-600 bg-opacity-75 rounded">{tech.name}</p>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="container mx-auto p-4 dark:bg-slate-900 dark:bg-opacity-50 backdrop-filter backdrop-blur-md rounded-tl-lg shadow-md mb-6" lang="en">
                <h2 className="text-3xl text-center mb-10 font-bold leading-tight dark:text-white text-darkPurple sm:text-4xl lg:text-5xl">Herramientas
                    <br className="block sm:hidden" /> <span className=' text-hoverBG'>Relevantes </span>
                </h2>
                <ul className="grid grid-cols-3 gap-4">
                    {technologies.map((tech, index) => (
                        <li key={index} className="relative group" onClick={() => handleIconClick(tech.name)} onMouseEnter={() => setSelectedTech(tech.name)} onMouseLeave={() => setSelectedTech(null)}>
                            <div className="w-24 h-24 flex items-center justify-center">
                                {tech.icon}
                            </div>
                            {selectedTech === tech.name && (
                                <p aria-hidden="true" className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white bg-gray-600 bg-opacity-75 rounded">{tech.name}</p>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            
        </div>


    );
};

export default TechnologiesPage;
