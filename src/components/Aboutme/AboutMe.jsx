import React, { useState, useEffect } from "react";
import "./AboutMe.css";

const aboutMeData = {
  description: `Soy desarrollador de software especializado en .NET, con interés en construir soluciones serias, estables y útiles, especialmente en contextos donde la responsabilidad y la toma de decisiones importan. Me muevo mejor en entornos donde el orden, la disciplina y el pensamiento lógico son clave.

Vengo de experiencias tanto técnicas como no técnicas, lo que me dio criterio práctico, adaptabilidad y una forma responsable de enfrentar problemas. No me interesa hacer software “bonito por fuera”; me importa que funcione, que sea confiable y que tenga sentido en la vida real.

Soy Adventista del Séptimo Día. Mi fe define mi forma de vivir y trabajar: integridad, autodisciplina y coherencia entre lo que digo y lo que hago.

Me gusta escalar montañas. Ahí aprendí paciencia, control emocional y respeto por el proceso: avanzar paso a paso, evaluando riesgos y entendiendo que los errores pequeños, repetidos, siempre terminan cobrando factura.`,
  qualities: `Responsable, colaborativo y comunicativo. Trabajo bien en equipo, mantengo una actitud cercana y respetuosa, y asumo los errores como parte del aprendizaje y la mejora continua.`,
};

const images = [
  "/imgs/yo.jpeg",
  "/imgs/club.jpeg",
  "/imgs/documentando.jpeg",

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
            Sobre <span className="text-hoverBG">Mi</span>
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
