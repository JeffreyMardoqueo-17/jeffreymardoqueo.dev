import React, { useState, useEffect } from "react";
import "./AboutMe.css";

const aboutMeData = {
  description: `Soy Desarrollador de Software con experiencia en C# y .NET, especialmente en ASP.NET Web API y ASP.NET MVC, enfocado en el desarrollo de APIs REST y soluciones backend robustas, mantenibles y orientadas a negocio.

He trabajado en entornos full stack participando en el desarrollo e integracion de aplicaciones web con React, aportando tambien conocimientos en JavaScript, TypeScript, Node.js y Express para construir soluciones de extremo a extremo.

Tengo experiencia en bases de datos SQL, principalmente SQL Server, fundamentos de NoSQL e integracion y consumo de APIs REST. Ademas, he trabajado en pruebas unitarias y E2E con xUnit, validacion de endpoints con Postman y analisis de logica de negocio para asegurar calidad funcional y tecnica.

Aplico principios SOLID, arquitectura en N-Capas, Clean Architecture y patrones de diseño para construir software escalable. Complemento mi trabajo con Docker y Docker Compose, procesos basicos de CI/CD y metodologias agiles (Scrum) usando Azure DevOps y Git.

Tambien cuento con conocimientos en desarrollo cross-platform con .NET MAUI y Blazor, y fundamentos en React Native para aplicaciones moviles. Me caracterizo por mi adaptacion tecnologica, enfoque en resultados y capacidad de trabajo en equipo.`,
  qualities: `Perfil profesional orientado al desarrollo e integracion de aplicaciones web y servicios backend, con pensamiento analitico, comunicacion efectiva y compromiso con la mejora continua.`,
};

const images = [
  "/imgs/yo.jpeg",
  "/imgs/club.jpeg",
  "/imgs/documentando.jpeg",
  "/imgs/Trabjaando.jpeg",
  "/imgs/nubes.jpeg",
];

const AboutMe = () => {
  const [current, setCurrent] = useState(0);

  const nextImage = () => setCurrent((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  // 🔁 Autoplay cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(interval); // limpieza correcta
  }, []);

  return (
    <section
      id="aboutme"
      className="min-h-screen flex items-center justify-center tracking-wider px-4"
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Carrusel */}
        <div className="relative w-full flex justify-center mb-8 lg:mb-0">
          <img
            src={images[current]}
            alt="Imagen personal"
            className="
              rounded-lg
              object-cover
              w-40 h-40
              sm:w-52 sm:h-52
              lg:w-96 lg:h-auto
              transition-all duration-300
            "
          />

          {/* Controles manuales */}
          <button
            onClick={prevImage}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
          >
            ‹
          </button>

          <button
            onClick={nextImage}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full"
          >
            ›
          </button>
        </div>

        {/* Texto */}
        <div className="w-full opacity-90 ">
          <h2 className="text-3xl font-bold dark:text-white text-black sm:text-4xl lg:text-5xl text-center lg:text-left">
            Sobre <span className="text-hoverBG">Mi Perfil</span>
          </h2>

          <p className="mt-6 text-gray-900 dark:text-gray-100 text-justify">
            {aboutMeData.description}
          </p>

          <p className="mt-6 dark:text-gray-100 text-justify">
            <strong className="dark:text-white">Calidades:</strong>{" "}
            {aboutMeData.qualities}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
