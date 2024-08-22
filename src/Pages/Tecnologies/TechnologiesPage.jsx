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
import { FaGitAlt } from "react-icons/fa";
import { SiAzuredevops } from "react-icons/si";
import React, { useState } from 'react';

const TechnologiesPage = () => {
    const [selectedTech, setSelectedTech] = useState(null);

    const handleIconClick = (techName) => {
        setSelectedTech(techName === selectedTech ? null : techName);
    };

    const frontend = [
        { name: 'JavaScript', icon: <IoLogoJavascript className="text-warning-500 w-16 h-16 md:w-24 md:h-24" /> },
        { name: 'React', icon: <FaReact className="text-blue-600 w-16 h-16 md:w-24 md:h-24" /> },
        { name: 'HTML', icon: <FaHtml5 className="text-orange-500 w-16 h-16 md:w-24 md:h-24" /> },
        { name: 'Sass', icon: <FaSass className="text-pink-500 w-16 h-16 md:w-24 md:h-24" /> },
        { name: 'Tailwindcss', icon: <SiTailwindcss className="text-blue-500 w-16 h-16 md:w-24 md:h-24" /> },
        { name: 'CSS', icon: <FaCss3Alt className="text-blue-600 w-16 h-16 md:w-24 md:h-24" /> },
        { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-800 w-16 h-16 md:w-24 md:h-24" /> },
        { name: 'C Sharp', icon: <SiCsharp className="text-purple-700 w-16 h-16 md:w-24 md:h-24" /> },
    ];

    const backend = [
        { name: 'Node JS', icon: <FaNode className="text-green-600 w-16 h-16 md:w-24 md:h-24" /> },
        { name: 'SQL Server', icon: <SiMicrosoftsqlserver className="text-red-600 w-16 h-16 md:w-24 md:h-24" /> },
        { name: 'C Sharp', icon: <SiCsharp className="text-purple-700 w-16 h-16 md:w-24 md:h-24" /> },
    ];

    const technologies = [
        { name: 'GitHub', icon: <FaGithub className="bg-black text-white w-16 h-16 md:w-24 md:h-24 rounded-full p-3" /> },
        { name: 'AzureDevOps', icon: <SiAzuredevops className="bg-blue-800 text-white w-16 h-16 md:w-24 md:h-24 rounded-full p-3" /> },
        { name: 'Git', icon: <FaGitAlt className="bg-orange-600 text-white w-16 h-16 md:w-24 md:h-24 rounded-full p-3" /> },
    ];

    return (
        <div className=" dark:bg-slate-950 dark:bg-opacity-50 backdrop-filter backdrop-blur-md mb-6 w-full">
            <div className="w-full mx-auto p-4 dark:bg-slate-900 dark:bg-opacity-50 backdrop-filter backdrop-blur-md rounded-tl-lg shadow-md mb-6">
                <h2 className="text-3xl text-center mb-10 font-bold leading-tight dark:text-white text-darkPurple sm:text-4xl lg:text-5xl">Frontend</h2>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {frontend.map((tech, index) => (
                        <li key={index} className="relative group" onClick={() => handleIconClick(tech.name)} onMouseEnter={() => setSelectedTech(tech.name)} onMouseLeave={() => setSelectedTech(null)}>
                            <div className="w-full h-full flex flex-col items-center justify-center">
                                <div className="flex items-center justify-center">
                                    {tech.icon}
                                </div>
                                {selectedTech === tech.name && (
                                    <p aria-hidden="true" className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white bg-gray-600 bg-opacity-75 rounded cursor-pointer">{tech.name}</p>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-full mx-auto p-4 dark:bg-slate-900 dark:bg-opacity-50 backdrop-filter backdrop-blur-md rounded-tl-lg shadow-md mb-6">
                <h2 className="text-3xl text-center mb-10 font-bold leading-tight dark:text-white text-darkPurple sm:text-4xl lg:text-5xl">Backend</h2>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {backend.map((tech, index) => (
                        <li key={index} className="relative group" onClick={() => handleIconClick(tech.name)} onMouseEnter={() => setSelectedTech(tech.name)} onMouseLeave={() => setSelectedTech(null)}>
                            <div className="w-full h-full flex flex-col items-center justify-center">
                                <div className="flex items-center justify-center">
                                    {tech.icon}
                                </div>
                                {selectedTech === tech.name && (
                                    <p aria-hidden="true" className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white bg-gray-600 bg-opacity-75 rounded cursor-pointer">{tech.name}</p>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-full mx-auto p-4 dark:bg-slate-900 dark:bg-opacity-50 backdrop-filter backdrop-blur-md rounded-tl-lg shadow-md mb-6">
                <h2 className="text-3xl text-center mb-10 font-bold leading-tight dark:text-white text-darkPurple sm:text-4xl lg:text-5xl">Herramientas<br className="block sm:hidden" /> <span className='text-hoverBG'>Relevantes</span></h2>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {technologies.map((tech, index) => (
                        <li key={index} className="relative group" onClick={() => handleIconClick(tech.name)} onMouseEnter={() => setSelectedTech(tech.name)} onMouseLeave={() => setSelectedTech(null)}>
                            <div className="w-full h-full flex flex-col items-center justify-center">
                                <div className="flex items-center justify-center">
                                    {tech.icon}
                                </div>
                                {selectedTech === tech.name && (
                                    <p aria-hidden="true" className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white bg-gray-600 bg-opacity-75 rounded cursor-pointer">{tech.name}</p>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TechnologiesPage;
