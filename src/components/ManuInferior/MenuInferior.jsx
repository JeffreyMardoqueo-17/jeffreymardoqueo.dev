import React from 'react';

const MenuInferior = () => {
    return (
        <div className='w-full h-5 bg-opacity-50 bg-blur-md backdrop-blur-md backdrop-filter absolute'>
            <nav className=''>
                <ul>
                    <li className='inline-block mx-2'>
                        <a href='#' className='text-blue-500 hover:text-blue-700'>Enlace 1</a>
                    </li>
                    <li className='inline-block mx-2'>
                        <a href='#' className='text-blue-500 hover:text-blue-700'>Enlace 2</a>
                    </li>
                    <li className='inline-block mx-2'>
                        <a href='#' className='text-blue-500 hover:text-blue-700'>Enlace 3</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default MenuInferior; 
