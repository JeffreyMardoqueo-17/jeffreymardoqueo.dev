import React from "react";
import Tarjeta from "../tarjeta/tarjeta";

// Array de proyectos
const proyectos = [
  {
    "nombre": "MIZU - Sistema de Gestión Integral de Agua",
    "descripcion": "Plataforma SaaS multi-tenant para la administración de proyectos de servicios de agua potable. Incluye gestión de usuarios, lectura de medidores, facturación, reuniones administrativas y validación de documentos de conformidad regulatoria.",
    "tecnologias": ["Next.js", "React 19", "TypeScript", "TailwindCSS", "Shadcn/UI", "ASP.NET Core 8", "C#", "PostgreSQL", "Dapper", "JWT", "Cloudinary", "Docker y Docker Compose"],
    "imagenes": [
      "/imgs/Mizu/dasboard.png",
      "/imgs/Mizu/login.png",
      "/imgs/Mizu/registrar.png",
      "/imgs/Mizu/registreradmin.png",
      "/imgs/Mizu/usuarios.png",
      "/imgs/Mizu/contadores.png",
      "/imgs/Mizu/reunion.png",
      "/imgs/Mizu/rolespermisos.png",
      "/imgs/Mizu/directivas.png",
      "/imgs/Mizu/documentosdeidentidad.png",
    ],
    "link": ""
  },

  {
    nombre: "Clynic - Sistema de control de citas para clinicas",
    descripcion:
      "Clynic System, una plataforma para la operacion de clinicas privadas. Este proyecto cubre la experiencia publica de captacion y agendamiento, el acceso autenticado del personal y los paneles operativos para administracion, recepcion y doctores.",
    tecnologias: ["NextJs", "Typescript", "Tailwindcss", "shadcn", "SQL server", "Entity Framework", "C#", ".NET", "Docker y docker compose"],
    imagenes: [
      "../../../imgs/Clynic/Dashboard_resepcion.png",
      "../../../imgs/Clynic/Dashboard_Adminstracion.png",
      "../../../imgs/Clynic/Vista_Lista_Trabajadores.png",
      "../../../imgs/Clynic/Calendario.png",
      "../../../imgs/Clynic/Panel_doctor.png",
      "../../../imgs/Clynic/Vistas_Sucursales.png",
      "../../../imgs/Clynic/Vista_appointment.png",
    ],

    link: "https://clynic-sys.vercel.app/",
  },
  {
    nombre: "Galaxium - Control de inventario y ventas",
    descripcion:
      "Este proyecto es un sistema ERP de inventario diseñado para gestionar de forma centralizada las entradas y salidas de productos en un negocio. Permite controlar el stock en tiempo real, registrar compras/ingresos de mercancía, ventas o despachos, y llevar trazabilidad de movimientos para tomar mejores decisiones. Además, integra módulos clave como productos, categorías, clientes, ventas, métodos de pago y dashboard, facilitando la operación diaria y reduciendo errores en el control del inventario.",
    tecnologias: ["NextJs", "Typescript", "Tailwindcss", "shadcn", "SQL server", "Entity Framework", "C#", ".NET"],
    imagenes: [
      "/imgs/Galaxium/alertas.png",
      "/imgs/Galaxium/categorias.png",
      "/imgs/Galaxium/cliente.png",
      "/imgs/Galaxium/compras.png",
      "/imgs/Galaxium/dashboard.png",
      "/imgs/Galaxium/dashboarddark.png",
      "/imgs/Galaxium/entradasstock.png",
      "/imgs/Galaxium/historial_ventas.png",
      "/imgs/Galaxium/newproduct.png",
      "/imgs/Galaxium/newstock.png",
      "/imgs/Galaxium/productos.png",
      "/imgs/Galaxium/proveedores.png",
      "/imgs/Galaxium/reportes.png",
      "/imgs/Galaxium/usuarios.png",
      "/imgs/Galaxium/venta.png",
      "/imgs/Galaxium/Venta_scaner.png",
    ],

    link: "https://clynic-sys.vercel.app/",
  },

  {
    nombre: "Sistema de Control de Pagos - Frontend",
    descripcion:
      "Interfaz de usuario del Sistema de Control de Pagos, construida con React.js y Tailwind CSS para una experiencia fluida y receptiva.",
    tecnologias: ["React.js", "Tailwind CSS", "Material UI", "Typescript"],
    imagenes: [
      "../../../imgs/caezFrontend.png",
    ],
  },
  {
    nombre: "Pagina Estatica de practica del Bootcamp sobre recetas",
    descripcion:
      "Pagina estatica de practica del Bootcamp de Frontend usando tecnologias como HTML, CSS y bootstrap, donde solo se muestra la receta, ademas solo era de hacer una replica de algo pero yo la hice un poquito mas como me gustaria para que no se viera tan basica.",
    tecnologias: ["HTML", "CSS", "Bootstrap"],
    imagenes: ["../../../imgs/recetas.png"],
    link: "https://jeffreymardoqueo-17.github.io/Recetario-Practica/",
  }, {
    nombre: "Sistema de Control de Pagos - Backend",
    descripcion:
      "API RESTful del Sistema de Control de Pagos, desarrollada con Node.js, Express y SQL Server para administrar datos de pagos de manera eficiente.",
    tecnologias: ["Node.js", "Express", "PostgreSQL",],
    imagenes: [
      "../../../imgs/BackendREAL.jpg"
    ],
  },
  {
    nombre: "Ejercicio de frontend, pagina de musica KodigoMusic",
    descripcion:
      "Ejercicio para practicar fornted, enlistado de musicas, busqueda de musicas, filtracion, reproduccion, responsive .",
    tecnologias: ["Nextjs", "Typescript", "Tailwindcss"],
    imagenes: ["../../../imgs/kodigomiusic.png"],
    link: "https://kodigo-music-rho.vercel.app/",
  },

  {
    nombre: "Consumo de Api atmo-weather",
    descripcion:
      "Aplicación web que consume la API atmo-weather para consultar el clima de los diferentes departamentos de El Salvador. ",
    tecnologias: ["Next.js", "Tailwind CSS"],
    imagenes: [
      "../../../imgs/clima.png",
    ],
    link: "https://atmo-weather-sv.vercel.app/",
  },
  {
    nombre: "Landing Page Digital Work",
    descripcion:
      "Landing Page de servicios de estampados (camisas, tasas, gorras, llaveros, etc) para el local Digital Work, construida react.js y tailwind css para una experiencia fluida y receptiva.",
    tecnologias: ["Vite", "CSS", "Tailwind CSS", "React.js"],
    imagenes: [
      "../../../imgs/digitalWork.png",
    ],
    link: "https://github.com/JeffreyMardoqueo-17/Digital-Work.git",
  },
  {
    nombre: "Landing Pague clon de Kodigo",
    descripcion:
      "Ejercicio práctico de frontend que consiste en un clon de la landing page oficial de Kodigo. El proyecto incluye la maquetación fiel de la interfaz y la implementación de un formulario de login para simular un proceso básico de autenticación, aplicando buenas prácticas de diseño responsive con React.js y Tailwind CSS.",
    tecnologias: ["Vite", "CSS", "Tailwind CSS", "React.js"],
    imagenes: ["../../../imgs/kodigopage.png"],
    link: "https://kodigo-register.vercel.app/",
  },
  {
    nombre: "Task - Gestor de tareas",
    descripcion:
      "Un proyecto pensado para el control de tareas en equipo, enfocado al ambito estudiantil, para que los aestros tengan un mejor control de los proyectos y lograr que los alumnos trabajen en equipo por igual .",
    tecnologias: ["C·,NET", "Tailwindcss", "Entity Framework", "SQL Server"],
    imagenes: [
      "../../../imgs/Tarea.png",
      // "../../../imgs/peer.png"
    ],
    link: "",
  },
  {
    nombre: "School Fees API - EN DESARROLLO",
    descripcion:
      "Proyecto backend enfocado en la gestión y control de pagos escolares, diseñado para centralizar registros, mejorar la organización financiera y facilitar el seguimiento de cobros de manera estructurada y confiable.",
    tecnologias: [".NET", "C#", "EF", "SQL SERVER"],
    imagenes: ["../../../imgs/SchoolFees.png"],
    link: "https://kodigo-register.vercel.app/",
  },
];

const Portafolio = () => {
  return (
    <section id="portafolio" className="container mx-auto p-4" aria-labelledby="portafolio-title">
      <h2 id="portafolio-title" className="text-3xl text-center mb-14 font-bold leading-tight dark:text-white text-darkPurple sm:text-4xl lg:text-5xl">
        Proyectos
      </h2>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {proyectos.map((proyecto, index) => (
          <Tarjeta
            key={index}
            imagenes={proyecto.imagenes}
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
