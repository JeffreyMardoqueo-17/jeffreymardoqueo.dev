import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import "./welcome.css";

const Welcome = () => {
  return (
    <section
      id="home"
      className="
    min-h-screen
    flex
    items-center
    dark:bg-darkPurple
    bg-lightPurple
    overflow-hidden
    container
  "
    >
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2 select-none">
          <div>
            <h2 className="text-3xl font-bold leading-tight dark:text-white text-darkPurple sm:text-4xl lg:text-5xl">
              Hey 👋 soy
              <br className="block sm:hidden" />{" "}
              <span className="text-hoverBG">Jeffrey </span>
            </h2>
            <p className="max-w-lg mt-3 text-xl leading-relaxed text-darkPurple dark:text-lightPurple md:mt-8 mb-10">
              Desarrollador de sofware con experiencia en el desarrollo de
              aplicaciones web.{" "}
              <span className="text-hoverBG font-semibold">
                Tecnico en Ingieneria de Desarrollo de Software
              </span>
            </p>
            <div className="flex gap-4 mt-10">
              <a
                href="/Document/CV Jeffrey Mardoqueo Jimenez Santos _ Portaafolio.pdf"
                download
                className="flex items-center gap-2 bg-darkPurple dark:bg-hoverBG text-white font-bold py-2 px-4 rounded-3xl shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-black visited:bg-darkPurple visited:bg-hoverBG select-none"
              >
                <FiDownload size={20} /> Descargar CV
              </a>
              <a
                href="https://github.com/JeffreyMardoqueo-17"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 dark:bg-gray-700 text-white font-semibold py-2 px-4 rounded-3xl shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-600"
              >
                <FaGithub size={20} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/jeffrey-mardoqueo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-700 dark:bg-blue-600 text-white font-semibold py-2 px-4 rounded-3xl shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-800"
              >
                <FaLinkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="relative mt-9 gradient-overlay">
            <img
              src="/imgs/mia.jpeg"
              alt="Jeffrey Mardoqueo"
              className="
                relative
                w-auto h-80
                mx-auto
                object-cover
                rounded-full
                shadow-lg
                shadow-gray-300/60
                dark:shadow-2xl
                dark:shadow-black/70
                ring-4
                ring-white
                dark:ring-hoverBG
                transition-all
                duration-300
            "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
