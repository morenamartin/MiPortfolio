export interface Proyecto {
    id: number;
    nombre: string;
    descripcion: string[];
    miRol: string;
    tecnologias: string[];
    imagen: string;
    linkProyecto: string;
    linkCodigo: string;
}

export const proyectos: Proyecto[] = [
    {
        id: 1,
        nombre: "Ascensores MG",
        descripcion: [
            "AscensoresMG es una página web diseñada para presentar los servicios de mantenimiento, reparación y conservación de ascensores de la empresa. El sitio es principalmente estático, con un enfoque en transmitir confianza, profesionalismo y facilitar el contacto con clientes potenciales.",
            "Este proyecto me permitió crecer en el desarrollo frontend, aprendiendo a crear interfaces profesionales y enfocadas en la experiencia del usuario, y a optimizar el rendimiento de la aplicación. Además, me dio mi primera experiencia real en un entorno profesional, entendiendo la importancia de entregar soluciones confiables, claras y de calidad."
        ],
        miRol: "Full-Stack Developer",
        tecnologias: ["Next.js", "React", "Tailwind", "TypeScript", "Flowbite-React", "Formik + Yup"],
        imagen: "/proyectos/ascensoresmg.png",
        linkProyecto: "https://www.ascensoresmgsrl.com.ar/",
        linkCodigo: ""
    },
    {
        id: 2,
        nombre: "PsyMatch",
        descripcion: [
            "Proyecto final de mi formación en Henry, desarrollado en equipo durante 3 semanas. Plataforma digital de salud mental que conecta pacientes con psicólogos mediante recomendaciones personalizadas, filtros por síntomas/especialidades y agendamiento con pago online.",
            "Mi rol: desarrollo Frontend junto con dos compañeros, colaborando con el equipo Backend. Mi aporte principal fue construir una interfaz clara, usable y con una experiencia de usuario fluida.",
            "Aprendí a colaborar efectivamente en un equipo, implementar pasarelas de pago, crear filtros combinados, integrar APIs de Google Maps y gestionar la persistencia de datos en formularios complejos con múltiples componentes."
        ],
        miRol: "Desarrollador Frontend en equipo de 3",
        tecnologias: ["Next.js", "Tailwind CSS", "TypeScript", "React", "Formik + Yup", "MercadoPago"],
        imagen: "/proyectos/psymatch.jpg",
        linkProyecto: "https://psy-match-frontend.vercel.app/",
        linkCodigo: "https://github.com/PsyMatch/PsyMatch-Frontend"
    },
    {
        id: 3,
        nombre: "E-commerce Henry",
        descripcion: [
            "Desarrollé de manera independiente el frontend de un e-commerce usando TypeScript, React, Next.js y Tailwind CSS, conectándome a APIs existentes.",
            "Validación de login con mensajes claros, confirmación antes de completar órdenes, visualización del historial de compras del usuario e implementación de rutas dinámicas [slug] para productos individuales.",
            "Enfocado en una interfaz moderna, clara y responsive, con atención a los detalles que mejoran la experiencia de usuario."
        ],
        miRol: "Desarrollador Frontend independiente",
        tecnologias: ["Next.js", "React", "Formik", "Tailwind CSS", "TypeScript", "Axios"],
        imagen: "/proyectos/ecommerce.png",
        linkProyecto: "https://pm4-e-commerce.vercel.app/",
        linkCodigo: "https://github.com/morenamartin/PM4-e-commerce"
    },
    {
        id: 4,
        nombre: "Páginas Compartidas",
        descripcion: [
            "Plataforma web que facilita el intercambio de libros entre usuarios. Los usuarios pueden registrarse, crear perfiles, listar libros disponibles para intercambio y buscar libros ofrecidos por otros usuarios.",
            "La plataforma incluye una sección donde se pueden hacer comunidades para colegios, la idea es que los estudiantes puedan compartir libros entre ellos de manera sencilla y organizada.",
            "Desarrollé habilidades en la creación de plataformas de intercambio, gestión de perfiles de usuario y listados dinámicos. Aprendí a implementar funcionalidades de búsqueda y filtrado."
        ],
        miRol: "Full-Stack Developer",
        tecnologias: ["Next.js", "Tailwind CSS", "TypeScript", "React", "NestJS", "PostgreSQL"],
        imagen: "/proyectos/paginascompartidas.png",
        linkProyecto: "",
        linkCodigo: ""
    }
];