import React, { useEffect, useMemo, useState } from "react";
import { FaLink } from "react-icons/fa6";

const Tarjeta = ({ imagen, imagenes = [], nombre, descripcion, tecnologias, link }) => {
  const slides = useMemo(() => {
    if (Array.isArray(imagenes) && imagenes.length > 0) return imagenes;
    return imagen ? [imagen] : [];
  }, [imagen, imagenes]);

  const [slideActual, setSlideActual] = useState(0);
  const [enPausa, setEnPausa] = useState(false);
  const [modalAbierto, setModalAbierto] = useState(false);

  const tieneCarrusel = slides.length > 1;

  useEffect(() => {
    setSlideActual(0);
  }, [slides.length]);

  useEffect(() => {
    if (!tieneCarrusel || enPausa) return undefined;

    const intervalId = setInterval(() => {
      setSlideActual((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(intervalId);
  }, [enPausa, tieneCarrusel, slides.length]);

  useEffect(() => {
    if (!modalAbierto) return undefined;

    const manejarTeclado = (event) => {
      if (event.key === "Escape") {
        setModalAbierto(false);
      }

      if (event.key === "ArrowRight") {
        setSlideActual((prev) => (prev + 1) % slides.length);
      }

      if (event.key === "ArrowLeft") {
        setSlideActual((prev) => (prev - 1 + slides.length) % slides.length);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", manejarTeclado);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", manejarTeclado);
    };
  }, [modalAbierto, slides.length]);

  const irASiguiente = () => {
    if (!tieneCarrusel) return;
    setSlideActual((prev) => (prev + 1) % slides.length);
  };

  const irAAnterior = () => {
    if (!tieneCarrusel) return;
    setSlideActual((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const abrirModal = () => {
    if (!slides.length) return;
    setModalAbierto(true);
  };

  return (
    <>
      <div
        className="
      w-full
      sm:max-w-[360px]
      md:max-w-[420px]
      h-[440px]
      border
      dark:border-slate-600
      rounded-lg
      overflow-hidden
      shadow-md
      dark:bg-slate-900/60
      mx-auto
      flex
      flex-col
      transition-transform
      hover:-translate-y-1
    "
      >
        <div
          className="relative"
          onMouseEnter={() => setEnPausa(true)}
          onMouseLeave={() => setEnPausa(false)}
        >
          <img
            src={slides[slideActual] || imagen}
            alt={`${nombre} vista ${slideActual + 1}`}
            className="w-full h-[220px] object-cover cursor-zoom-in"
            loading="lazy"
            onClick={abrirModal}
          />

          {tieneCarrusel && (
            <>
              <button
                type="button"
                onClick={irAAnterior}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/45 text-white w-8 h-8 rounded-full text-sm"
                aria-label={`Ver imagen anterior de ${nombre}`}
              >
                {"<"}
              </button>

              <button
                type="button"
                onClick={irASiguiente}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/45 text-white w-8 h-8 rounded-full text-sm"
                aria-label={`Ver siguiente imagen de ${nombre}`}
              >
                {">"}
              </button>

              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1">
                {slides.map((_, index) => (
                  <button
                    key={`${nombre}-slide-${index}`}
                    type="button"
                    onClick={() => setSlideActual(index)}
                    className={`h-2 rounded-full transition-all ${
                      slideActual === index ? "w-5 bg-white" : "w-2 bg-white/60"
                    }`}
                    aria-label={`Ir a imagen ${index + 1} de ${nombre}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="p-4 flex flex-col flex-grow">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold text-redPasion truncate">
              {nombre}
            </h2>

            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400"
              >
                <FaLink size={20} />
              </a>
            )}
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-3">
            {descripcion}
          </p>

          <div className="mt-auto flex flex-wrap gap-2">
            {tecnologias.map((tecnologia, index) => (
              <span
                key={index}
                className="bg-gray-200 dark:bg-slate-700 px-2 py-1 text-xs rounded-full"
              >
                {tecnologia}
              </span>
            ))}
          </div>
        </div>
      </div>

      {modalAbierto && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-3"
          onClick={() => setModalAbierto(false)}
        >
          <div
            className="relative w-full max-w-5xl bg-slate-900 rounded-xl p-3 sm:p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="absolute right-3 top-3 text-white bg-black/50 w-9 h-9 rounded-full"
              onClick={() => setModalAbierto(false)}
              aria-label={`Cerrar vista ampliada de ${nombre}`}
            >
              X
            </button>

            <img
              src={slides[slideActual] || imagen}
              alt={`${nombre} ampliada ${slideActual + 1}`}
              className="w-full h-[60vh] sm:h-[70vh] object-contain rounded-lg"
            />

            {tieneCarrusel && (
              <>
                <button
                  type="button"
                  onClick={irAAnterior}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white w-10 h-10 rounded-full"
                  aria-label={`Ver imagen anterior de ${nombre} en modal`}
                >
                  {"<"}
                </button>

                <button
                  type="button"
                  onClick={irASiguiente}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white w-10 h-10 rounded-full"
                  aria-label={`Ver siguiente imagen de ${nombre} en modal`}
                >
                  {">"}
                </button>

                <div className="mt-3 flex justify-center items-center gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={`${nombre}-modal-slide-${index}`}
                      type="button"
                      onClick={() => setSlideActual(index)}
                      className={`h-2.5 rounded-full ${
                        slideActual === index ? "w-6 bg-white" : "w-2.5 bg-white/60"
                      }`}
                      aria-label={`Ir a imagen ${index + 1} de ${nombre} en modal`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Tarjeta;
