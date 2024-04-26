import React from 'react';
import { MdDarkMode } from "react-icons/md"; // Icono de la luna
import { WiDaySunny } from "react-icons/wi"; // Icono de sol
import { FaGithub } from "react-icons/fa"; // Icono de GitHub+
import { FaUser } from "react-icons/fa";
import { MdClass } from "react-icons/md";
import { SiGmail, SiHyperskill } from "react-icons/si";
import { HiBriefcase } from "react-icons/hi2";
import { CgMail } from "react-icons/cg";

const MenuInferior = ({ toggleTheme, theme }) => {
    const icon = theme === 'dark' ? <MdDarkMode className="w-8 h-8 fill-current dark:text-white" /> : <WiDaySunny className="w-8 h-8 fill-current dark:text-white" />;

    const handleClick = (e) => {
        e.preventDefault(); // Evitar que la página se desplace hacia arriba
        toggleTheme(); // Cambiar el tema
    };

    return (
        <div className="fixed bottom-0 left-0 w-full ligth:bg-lightPurple bg-opacity-50 dark:bg-slate-900 dark:bg-opacity-50 backdrop-filter backdrop-blur-md">
            <div className="flex justify-center p-2 space-x-6">
                <a className="flex items-center justify-center" href="#" onClick={handleClick}>
                    {icon}
                </a>
                <a className="flex items-center justify-center" href="#">
                    <svg className="w-8 h-8 stroke-current dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                </a>
                <a className="flex items-center justify-center" href="https://github.com/JeffreyMardoqueo-17">
                    <FaGithub className='w-8 h-8 stroke-current dark:text-white' />
                </a>
                {/* aboutme */}
                <a className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-darkPurple hover:text-lightPurple dark:hover:bg-hoverBG " href="https://github.com/JeffreyMardoqueo-17">
                    <FaUser className='w-6 h-6 stroke-current dark:text-white' />
                </a>
                <a className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-darkPurple hover:text-lightPurple dark:hover:bg-hoverBG " href="https://github.com/JeffreyMardoqueo-17">
                    <MdClass className='w-6 h-6 stroke-current dark:text-white' />
                </a>
                {/* estos no deben aparecer hasta que yo le de clic a la flecha para ver mas */}
                {/* <a className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-darkPurple hover:text-lightPurple dark:hover:bg-hoverBG " href="https://github.com/JeffreyMardoqueo-17">
                    <SiHyperskill className='w-6 h-6 stroke-current dark:text-white' />
                </a>
                <a className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-darkPurple hover:text-lightPurple dark:hover:bg-hoverBG " href="https://github.com/JeffreyMardoqueo-17">
                    <HiBriefcase className='w-6 h-6 stroke-current dark:text-white' />
                </a>
                <a className="flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-darkPurple hover:text-lightPurple dark:hover:bg-hoverBG " href="https://github.com/JeffreyMardoqueo-17">
                    <SiGmail className='w-6 h-6 stroke-current dark:text-white' />
                </a> */}
            </div>
        </div>
    );
};

export default MenuInferior;
