import React from 'react';

const Welcome = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between p-4 md:p-10">
            <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-2xl md:text-4xl font-bold mb-4 dark:text-pink-300 text-darkPurple">Me llamo Jeffrey Mardoqueo</h1>
                <p className="text-lg md:text-xl mb-4 text-darkPurple dark:text-lightPurple">Soy desarrollador de software.</p>
                <button className="bg-darkPurple dark:bg-hoverBG  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Descargar currículum
                </button>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0 w-1/1 dark:bg-hoverBG bg-darkPurple ">
                <img src="/imgs/FOOTOO.png" alt="Foto de Jeffrey Mardoqueo" className="w-full md:h-auto rounded" />
            </div>
        </div>
    );
};

export default Welcome;
