import { IoLogoJavascript } from "react-icons/io5";
import { SiCsharp } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import React, { useState } from 'react';

const TechnologiesPage = () => {
    const [selectedTech, setSelectedTech] = useState(null);

    const handleIconClick = (techName) => {
        setSelectedTech(techName);
    };

    const technologies = [
        { name: 'JavaScript', icon: <IoLogoJavascript className="text-warning-500 w-24 h-24 " /> },
        { name: 'React', icon: <FaReact className="text-blue-600 w-24 h-24 " /> },
        { name: 'HTML', icon: <FaHtml5 className="text-orange-500 w-24 h-24 " /> },
        { name: 'Sass', icon: <FaSass className="text-pink-500 w-24 h-24 " /> },
        { name: 'Tailwindcss ', icon: <SiTailwindcss className="text-blue-500 w-24 h-24 " /> },
        { name: 'CSS', icon: <FaCss3Alt className="text-blue-600 w-24 h-24 " /> },
        { name: 'Node JS', icon: <FaNode className="text-green-600 w-24 h-24 " /> },
        { name: 'SQL Server', icon: <SiMicrosoftsqlserver className="text-red-600 w-24 h-24 " /> },
        { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-800 w-24 h-24" /> },
        { name: 'C Sharp', icon: <SiCsharp className="text-purple-700 w-24 h-24" /> },
        { name: 'GitHub', icon: <FaGithub className="bg-black text-white w-24 h-24 rounded-full p-3" /> }
        // Agrega más tecnologías según sea necesario
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Tecnologías que manejo</h1>
            <ul className="grid grid-cols-3 gap-4">
                {technologies.map((tech, index) => (
                    <li key={index} className="text-center cursor-pointer" onClick={() => handleIconClick(tech.name)} onMouseEnter={() => setSelectedTech(tech.name)} onMouseLeave={() => setSelectedTech(null)}>
                        {tech.icon}
                    </li>
                ))}
            </ul>
            {selectedTech && <p className="mt-4 text-xl">{selectedTech}</p>}
        </div>
    );
};

export default TechnologiesPage;