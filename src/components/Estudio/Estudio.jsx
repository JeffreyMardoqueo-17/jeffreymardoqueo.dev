import React from "react";

const educacionSuperior = [
  {
    Time: "ESFE/AGAPE 2023-2024",
    Titulo: "Técnico En Ingeniería de Desarrollo de Software",
    Descripcion:
      "Programación .NET - Bases de datos - Desarrollo web - APIs RESTful - Control de versiones - Metodologías ágiles - Diseñar, desarrollar y mantener software, asegurando su correcto funcionamiento y adaptándolo a las necesidades de los usuarios",
  },
  {
    Time: "Kodigo 2024 - 2025",
    Titulo: "Desarrollador Full Stack Junior",
    Descripcion:
      "Desarrollo de aplicaciones web · TypeScript· React · PHP · Laravel · MySQL · Metodología ágil Scrum · Trabajo en equipo ",
  },
];

const otros = [
  {
    Time: "TPC Sonsonate, 2022",
    Titulo: "Analista programador de Sistemas",
    Descripcion:
      "Desarrollo de sistemas · Análisis de sistemas · Lógica de programación · Implementación · Mantenimiento de software.",
  },
  {
    Time: "TPC Sonsonate, 2021",
    Titulo: "Técnico Operador en Windows",
    Descripcion:
      "Administración de sistemas Windows · Manejo avanzado de Office ",
  },
  {
    Time: "Udemy, 2024",
    Titulo: "Curso de Desarrollo Web Completo",
    Descripcion:
      "Aprendí habilidades de desarrollo frontend y backend, incluyendo HTML, CSS, JavaScript, Node.js y SQL server.",
  },
];

const Estudio = () => {
  return (
    <div
      id="estudios"
      className="container mx-auto min-h-screen flex items-center"
    >
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 select-none">
        {/* Educación Superior */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-12 text-redPasion text-center lg:text-left">
            Educación Superior
          </h1>

          <ol className="relative border-s ml-6 border-hoverBG space-y-12">
            {educacionSuperior.map((edu, index) => (
              <li key={index} className="ms-6">
                <div className="absolute w-3 h-3 bg-rojoClaro rounded-full mt-2 -start-1.5 border border-hoverBG"></div>

                <time className="block mb-2 text-xl font-normal text-rojoClaro">
                  {edu.Time}
                </time>

                <h3 className="text-2xl font-semibold text-darkPurple dark:text-lightPurple">
                  {edu.Titulo}
                </h3>

                <p className="mt-2 text-lg font-normal text-gray-500 dark:text-gray-400">
                  {edu.Descripcion}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Otros */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-12 text-redPasion text-center lg:text-left">
            Otros
          </h1>

          <ol className="relative border-s ml-6 border-hoverBG space-y-12">
            {otros.map((otro, index) => (
              <li key={index} className="ms-6">
                <div className="absolute w-3 h-3 bg-rojoClaro rounded-full mt-2 -start-1.5 border border-hoverBG"></div>

                <time className="block mb-2 text-xl font-normal text-rojoClaro">
                  {otro.Time}
                </time>

                <h3 className="text-2xl font-semibold text-darkPurple dark:text-lightPurple">
                  {otro.Titulo}
                </h3>

                <p className="mt-2 text-lg font-normal text-gray-500 dark:text-gray-400">
                  {otro.Descripcion}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Estudio;
