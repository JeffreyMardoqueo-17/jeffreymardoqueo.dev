import React from 'react';

const Welcome = () => {
    return (
        <section className="pt-10 overflow-hidden dark:bg-darkPurple bg-lightPurple md:pt-0 sm:pt-16 2xl:pt-16">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 md:grid-cols-2">

                    <div>
                        <h2 className="text-3xl font-bold leading-tight dark:text-white text-darkPurple sm:text-4xl lg:text-5xl">Hey 👋 soy
                            <br className="block sm:hidden" /> <span className='dark:text-pink-300 text-hoverBG'>Jeffrey </span>

                            {/* AGREGAR UNA SESION DONDE PUEDA SELECCIONAR EL USAURIO Y DECIR COMO ESTA */}
                        </h2>
                        <p className="max-w-lg mt-3 text-xl leading-relaxed text-darkPurple dark:text-lightPurple md:mt-8">
                            Desarrollador frontend, aprendiendo constantemente para ser Desarrollador Full-Stak, disfruto creando productos dinámicos y creativos de principio a fin.Te invito a revisar mis proyectos!
                        </p>
                        <button className="bg-darkPurple mt-4 dark:bg-hoverBG  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Descargar currículum
                        </button>
                    </div>

                    <div className="relative mt-9">
                        <img className="absolute  inset-x-0 bottom-0 -mb-12 -translate-x-1/2 left-1/2" src="/imgs/Vector.svg" alt="" />
                        {/* foto mia */}
                        <img className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="/imgs/FOOTOO.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Welcome;