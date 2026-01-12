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
      "
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-12 select-none">
          {/* TEXTO */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold leading-tight dark:text-white text-darkPurple sm:text-4xl lg:text-5xl">
              Hey 👋 soy{" "}
              <span className="text-hoverBG block sm:inline">Jeffrey</span>
            </h2>

            <p className="max-w-lg mx-auto md:mx-0 mt-4 text-lg sm:text-xl leading-relaxed text-darkPurple dark:text-lightPurple">
              Desarrollador de software con experiencia en aplicaciones web.{" "}
              <span className="text-hoverBG font-semibold block sm:inline">
                Técnico en Ingeniería de Desarrollo de Software
              </span>
            </p>

            {/* BOTONES */}
            <div
              className="
              flex
              flex-col
              sm:flex-row
              gap-4
              mt-8
              items-center
              sm:items-start
              justify-center
              md:justify-start
            "
            >
              <a
                href="/Document/Jeffrey Marodoqueo CV 2026 QR.pdf"
                download
                className="
                  w-full sm:w-auto
                  flex items-center justify-center gap-2
                  bg-darkPurple dark:bg-hoverBG
                  text-white font-bold
                  py-3 px-6
                  rounded-3xl
                  shadow-lg
                  transition-transform
                  hover:scale-105
                "
              >
                <FiDownload size={20} /> Descargar CV
              </a>

              <a
                href="https://github.com/JeffreyMardoqueo-17"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-full sm:w-auto
                  flex items-center justify-center gap-2
                  bg-gray-800 dark:bg-gray-700
                  text-white font-semibold
                  py-3 px-6
                  rounded-3xl
                  shadow-lg
                  transition-transform
                  hover:scale-105
                "
              >
                <FaGithub size={20} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/jeffrey-mardoqueo"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-full sm:w-auto
                  flex items-center justify-center gap-2
                  bg-blue-700 dark:bg-blue-600
                  text-white font-semibold
                  py-3 px-6
                  rounded-3xl
                  shadow-lg
                  transition-transform
                  hover:scale-105
                "
              >
                <FaLinkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* IMAGEN */}
          <div className="relative flex justify-center mt-10 md:mt-0">
            <img
              src="/imgs/mia.jpeg"
              alt="Jeffrey Mardoqueo"
              className="
    w-40 h-40
    sm:w-52 sm:h-52
    lg:w-72 lg:h-72
    object-cover
    rounded-full
    shadow-lg
    ring-4
    border-10
    ring-azul
    dark:ring-red-500
    transition-all
  "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
