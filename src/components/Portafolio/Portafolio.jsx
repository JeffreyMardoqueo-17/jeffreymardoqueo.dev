import React from "react";
import Tarjeta from "../tarjeta/tarjeta";

// Array de proyectos
const proyectos = [
  {
    nombre: "Sistema de Control de Pagos - Frontend",
    descripcion:
      "Interfaz de usuario del Sistema de Control de Pagos, construida con React.js y Tailwind CSS para una experiencia fluida y receptiva.",
    tecnologias: ["React.js", "Tailwind CSS", "Material UI", "Typescript"],
    imagen: "../../../imgs/caezFrontend.png",
  },
  {
    nombre: "Sistema de Control de Pagos - Backend",
    descripcion:
      "API RESTful del Sistema de Control de Pagos, desarrollada con Node.js, Express y SQL Server para administrar datos de pagos de manera eficiente.",
    tecnologias: ["Node.js", "Express", "SQL Server"],
    imagen: "../../../imgs/caezbackend.png",
  },
  {
    nombre: "Pagina Estatica de practica del Bootcamp sobre recetas",
    descripcion:
      "Pagina estatica de practica del Bootcamp de Frontend usando tecnologias como HTML, CSS y bootstrap, donde solo se muestra la receta, ademas solo era de hacer una replica de algo pero yo la hice un poquito mas como me gustaria para que no se viera tan basica.",
    tecnologias: ["HTML", "CSS", "Bootstrap"],
    imagen: "../../../imgs/recetas.png",
    link: "https://jeffreymardoqueo-17.github.io/Recetario-Practica/",
  },
  {
    nombre: "Ejercicio de frontend, pagina de musica KodigoMusic",
    descripcion:
      "Ejercicio para practicar fornted, enlistado de musicas, busqueda de musicas, filtracion, reproduccion, responsive .",
    tecnologias: ["Nextjs", "Typescript", "Tailwindcss"],
    imagen: "../../../imgs/kodigomiusic.png",
    link: "https://kodigo-music-rho.vercel.app/",
  },
  {
    nombre: "Consumo de Api atmo-weather",
    descripcion:
      "Aplicación web que consume la API atmo-weather para consultar el clima de los diferentes departamentos de El Salvador. ",
    tecnologias: ["Next.js", "Tailwind CSS"],
    imagen: "../../../imgs/clima.png",
    link: "https://atmo-weather-sv.vercel.app/",
  },
  {
    nombre: "Landing Page Digital Work",
    descripcion:
      "Landing Page de servicios de estampados (camisas, tasas, gorras, llaveros, etc) para el local Digital Work, construida react.js y tailwind css para una experiencia fluida y receptiva.",
    tecnologias: ["Vite", "CSS", "Tailwind CSS", "React.js"],
    imagen: "../../../imgs/digitalWork.png",
    link: "https://github.com/JeffreyMardoqueo-17/Digital-Work.git",
  },
  {
    nombre: "Landing Pague clon de Kodigo",
    descripcion:
      "Ejercicio práctico de frontend que consiste en un clon de la landing page oficial de Kodigo. El proyecto incluye la maquetación fiel de la interfaz y la implementación de un formulario de login para simular un proceso básico de autenticación, aplicando buenas prácticas de diseño responsive con React.js y Tailwind CSS.",
    tecnologias: ["Vite", "CSS", "Tailwind CSS", "React.js"],
    imagen: "../../../imgs/kodigopage.png",
    link: "https://kodigo-register.vercel.app/",
  },
    {
    nombre: "Task - Gestor de tareas",
    descripcion:
      "Un proyecto pensado para el control de tareas en equipo, enfocado al ambito estudiantil, para que los aestros tengan un mejor control de los proyectos y lograr que los alumnos trabajen en equipo por igual .",
    tecnologias: ["C·,NET", "Tailwindcss", "Entity Framework", "SQL Server"],
    imagen: "../../../imgs/Tarea.png",
    link: "",
  },
  {
    nombre: "School Fees API - EN DESARROLLO",
   descripcion:
  "Proyecto backend enfocado en la gestión y control de pagos escolares, diseñado para centralizar registros, mejorar la organización financiera y facilitar el seguimiento de cobros de manera estructurada y confiable.",
  tecnologias: [".NET", "C#", "EF", "SQL SERVER"],
    imagen: "../../../imgs/SchoolFees.png",
    link: "https://kodigo-register.vercel.app/",
  },
];

const Portafolio = () => {
  return (
    <section id="portafolio" className="container mx-auto p-4">
      <h2 className="text-3xl text-center mb-14 font-bold leading-tight dark:text-white text-darkPurple sm:text-4xl lg:text-5xl">
        Proyectos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {proyectos.map((proyecto, index) => (
          <Tarjeta
            key={index}
            imagen={proyecto.imagen}
            nombre={proyecto.nombre}
            descripcion={proyecto.descripcion}
            tecnologias={proyecto.tecnologias}
            link={proyecto.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Portafolio;
