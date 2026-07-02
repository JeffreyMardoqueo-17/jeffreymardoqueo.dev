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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center select-none">
          {/* TEXTO */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-darkPurple dark:text-white">
              Hey 👋 soy{" "}
              <span className="text-hoverBG block sm:inline">
                Jeffrey
              </span>
            </h1>

            <h2 className="mt-4 text-xl sm:text-2xl font-semibold text-hoverBG">
              Mid-Level Full Stack Developer
            </h2>

            <p className="max-w-xl mx-auto md:mx-0 mt-5 text-lg leading-relaxed text-darkPurple dark:text-lightPurple">
              Desarrollador Full Stack con experiencia construyendo aplicaciones
              web modernas utilizando{" "}
              <span className="font-semibold text-hoverBG">
                C#, ASP.NET Core, React, Next.js, TypeScript y PostgreSQL.
              </span>{" "}
              Me especializo en desarrollar APIs REST, arquitecturas escalables y
              soluciones enfocadas en rendimiento, mantenibilidad y una excelente
              experiencia de usuario.
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
                href="/Document/Jeffrey_Marodoqueo_Jimenez_CV.pdf"
                download
                className="
                  w-full sm:w-auto
                  flex items-center justify-center gap-2
                  bg-darkPurple dark:bg-hoverBG
                  text-white font-bold
                  py-3 px-6
                  rounded-3xl
                  shadow-lg
                  transition-all
                  hover:scale-105
                "
              >
                <FiDownload size={20} />
                Descargar CV
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
                  transition-all
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
                  transition-all
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
              src="/imgs/mianueva.jpg"
              alt="Retrato de Jeffrey Mardoqueo"
              loading="eager"
              decoding="async"
              className="
      w-40 h-40
      sm:w-52 sm:h-52
      lg:w-72 lg:h-72
      object-cover
      rounded-full
      shadow-xl
      transition-all
      border-4 border-hoverBG
    "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;