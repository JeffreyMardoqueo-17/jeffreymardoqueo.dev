
import React from 'react';
import { MdDarkMode } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";
import { FaUser } from "react-icons/fa";
import { MdClass } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { HiBriefcase } from "react-icons/hi2";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-scroll';
import './Menu.css';

const Menu = ({ toggleTheme, theme }) => {
    console.log('Menu component rendered with theme:', theme);
    console.log('Menu props:', { toggleTheme, theme });

    const icon = theme === 'dark' ? <MdDarkMode className="w-8 h-8 fill-current" /> : <WiDaySunny className="w-8 h-8 fill-current" />;

    const handleClick = (e) => {
        e.preventDefault();
        console.log('Theme toggle clicked');
        toggleTheme();
    };

    const links = [
        { to: 'home', icon: <FaHome className='w-6 h-6 stroke-current dark:text-white' />, tooltip: 'Home' },
        { to: 'aboutme', icon: <FaUser className='w-6 h-6 stroke-current' />, tooltip: 'About Me' },
        { to: 'estudios', icon: <MdClass className='w-6 h-6 stroke-current dark:text-white' />, tooltip: 'Estudios' },
        { to: 'portafolio', icon: <HiBriefcase className='w-6 h-6 stroke-current dark:text-white' />, tooltip: 'Proyectos' },
        { to: 'correo', icon: <SiGmail className='w-6 h-6 stroke-current dark:text-white' />, tooltip: 'Correo' }
    ];

    return (
        <div className="fixed top-0 left-0 bottom-0 flex flex-col items-center p-2 w-20 bg-lightPurple dark:bg-darkPurple">
            <div className="flex flex-col items-left w-11 p-2 h-auto overflow-hidden text-darkPurple dark:to-blue-50 dark:text-lightPurple">
                <a className="flex items-center justify-center mt-3" href="#" onClick={handleClick}>
                    {icon}
                </a>
                <div className="flex flex-col items-center content-center justify-center mt-3 border-t border-gray-700">
                    {links.map((link, index) => {
                        console.log(`Rendering link: ${link.tooltip}`);
                        return (
                            <Link
                                key={index}
                                className="relative flex items-center justify-center w-12 h-12 mt-2 rounded hover:bg-darkPurple hover:text-lightPurple dark:hover:bg-hoverBG cursor-pointer"
                                to={link.to}
                                smooth={true}
                                duration={500}
                                offset={-20}
                            >
                                {link.icon}
                                <span className="tooltip">{link.tooltip}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Menu;
