// src/components/Layout/Layout.js
import React from 'react';
import Menu from '../components/Menu/Menu';
import MenuInferior from '../components/ManuInferior/MenuInferior';
import useMediaQuery from '../hooks/useMediaQuery';

const Layout = ({ children, toggleTheme, theme }) => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <div className="flex">
            {!isMobile && (
                <div className="w-20 h-screen fixed bg-green-300">
                    <Menu toggleTheme={toggleTheme} theme={theme} />
                </div>
            )}
            <div className={`flex-1 ${!isMobile ? 'ml-20' : ''} h-screen overflow-y-auto dark:bg-darkPurple`}>
                {children}
            </div>
            {isMobile && <MenuInferior toggleTheme={toggleTheme} theme={theme} />}
        </div>
    );
};

export default Layout;
