import React from 'react';

const Contact = () => {
    return (
        <div className="flex w-full items-center justify-center min-h-screen bg-lightPurple dark:bg-darkPurple">
            {/* ESTE ES EL FORMULARIO PARA CONTACTARME */}
            <form className="w-full max-w-2xl mx-auto bg-white dark:bg-slate-900 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-6 text-darkPurple dark:text-lightPurple text-center">Contactame</h2>
                
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-darkPurple dark:text-lightPurple">Su correo electronico   </label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-darkPurple text-sm rounded-lg focus:ring-azul focus:border-azul block w-full p-2.5 dark:bg-darkPurple dark:border-gray-600 dark:placeholder-gray-400 dark:text-lightPurple dark:focus:ring-azul dark:focus:border-azul" placeholder="name@example.com" required />
                </div>
                
                <div className="mb-5">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-darkPurple dark:text-lightPurple">Su mensaje</label>
                    <textarea id="message" rows="4" className="bg-gray-50 border border-gray-300 text-darkPurple text-sm rounded-lg focus:ring-azul focus:border-azul block w-full p-2.5 dark:bg-darkPurple dark:border-gray-600 dark:placeholder-gray-400 dark:text-lightPurple dark:focus:ring-azul dark:focus:border-azul" placeholder="Write your message here..." required></textarea>
                </div>
                
                <button type="submit" className="text-white bg-azul hover:bg-redPasion focus:ring-4 focus:outline-none focus:ring-redPasion font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-azul dark:hover:bg-redPasion dark:focus:ring-redPasion">Send</button>
            </form>
        </div>
    );
}

export default Contact;
