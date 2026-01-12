import React from "react";
import { FaLink } from "react-icons/fa6";

const Tarjeta = ({ imagen, nombre, descripcion, tecnologias, link }) => {
  return (
    <div
      className="
    w-full
    sm:max-w-[360px]
    md:max-w-[420px]
    h-[380px]
    border
    dark:border-slate-600
    rounded-lg
    overflow-hidden
    shadow-md
    dark:bg-slate-900/60
    mx-auto
    flex
    flex-col
  "
    >
      <img
        src={imagen}
        alt={nombre}
        className="w-full h-[160px] object-cover"
      />

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
  );
};

export default Tarjeta;
