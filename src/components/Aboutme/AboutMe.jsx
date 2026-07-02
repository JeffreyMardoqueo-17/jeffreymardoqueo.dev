import React, { useState, useEffect } from "react";
import "./AboutMe.css";

const aboutMeData = {
  description: [
    `Soy desarrollador de software con experiencia en el desarrollo de aplicaciones web utilizando C#, ASP.NET Core, React, Next.js y TypeScript. He participado en el diseño e implementación de APIs REST, desarrollo de funcionalidades frontend y backend, modelado de bases de datos y construcción de soluciones escalables siguiendo buenas prácticas de desarrollo.`,

    `Me gusta trabajar de forma organizada, comprender el problema antes de escribir código y desarrollar soluciones que sean fáciles de mantener y evolucionar. Me adapto con rapidez a nuevas tecnologías y disfruto colaborar con equipos donde la calidad del software y el trabajo en conjunto forman parte del proceso.`,

    `Fuera del desarrollo de software, uno de mis principales intereses son las finanzas y los mercados financieros. Como Trader dedico tiempo al análisis de activos, la gestión del riesgo y la toma de decisiones basada en probabilidades, habilidades que también fortalecen mi pensamiento analítico y mi capacidad para resolver problemas de manera objetiva.`,
  ],


};

const images = [
  "/imgs/trabajando.jpg",
  // "/imgs/sesionfoto.png",
  "/imgs/trader.jpg",
];

const AboutMe = () => {
  const [current, setCurrent] = useState(0);

  const nextImage = () =>
    setCurrent((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="aboutme"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* IMÁGENES */}
        <div className="relative flex justify-center">
          <img
            src={images[current]}
            alt="Jeffrey Mardoqueo"
            className="
              w-72
              h-72
              sm:w-80
              sm:h-80
              lg:w-[420px]
              lg:h-[520px]
              object-cover
              rounded-2xl
              shadow-2xl
              transition-all
              duration-500
            "
          />

          <button
            onClick={prevImage}
            className="
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              w-10
              h-10
              rounded-full
              bg-black/50
              hover:bg-black/70
              text-white
              transition
            "
          >
            ‹
          </button>

          <button
            onClick={nextImage}
            className="
              absolute
              right-3
              top-1/2
              -translate-y-1/2
              w-10
              h-10
              rounded-full
              bg-black/50
              hover:bg-black/70
              text-white
              transition
            "
          >
            ›
          </button>
        </div>

        {/* TEXTO */}
        <div>

          <h2 className="text-4xl lg:text-5xl font-bold dark:text-white text-black">
            Sobre{" "}
            <span className="text-hoverBG">
              mí
            </span>
          </h2>

          <div className="mt-8 space-y-6">

            {aboutMeData.description.map((paragraph, index) => (
              <p
                key={index}
                className="
                  text-gray-700
                  dark:text-gray-300
                  leading-8
                  text-justify
                "
              >
                {paragraph}
              </p>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;