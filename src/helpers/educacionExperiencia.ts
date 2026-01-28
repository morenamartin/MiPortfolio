export interface ExperienciaEducacion {
    id: number;
    titulo: string;
    fecha: string;
    lugar: string;
    descripcion: string[];
    tecnologias: string[];
}

export const experienciasEducacion: ExperienciaEducacion[] = [
    {
        id: 1,
        titulo: "CURSO MODELADO 3D - TINKERCAD",
        fecha: "12 Enero, 2023",
        lugar: "VinciU",
        descripcion: [
            "Curso introductorio al modelado 3D enfocado en el uso de Tinkercad como herramienta principal, abordando los fundamentos del diseño tridimensional y su aplicación práctica.",
            "Como proyecto final, se desarrolló el diseño completo de un robot, dejando el modelo preparado para su impresión 3D, con correcta organización de piezas y validación del diseño.",
            "Se trabajaron conceptos de geometría básica aplicada al modelado 3D, sistema diédrico y el uso completo de Tinkercad para la creación de modelos listos para impresión 3D."
        ],
        tecnologias: [
            "/icons/tinkercad.svg"
        ]
    },
    {
        id: 2,
        titulo: "CURSO BASES DEL DISEÑO: CANVA",
        fecha: "07 Marzo, 2023",
        lugar: "VinciU",
        descripcion: [
            "Curso orientado a los fundamentos del diseño gráfico, enfocado en el diseño como herramienta de comunicación visual y su aplicación práctica mediante Canva.",
            "Se trabajaron los objetivos del diseño, la definición del problema, las leyes de la Gestalt y la construcción de composiciones visuales claras y coherentes.",
            "Se abordaron conceptos de color y psicología del color, tipografía, jerarquía visual, branding, marca gráfica e identidad visual, aplicados al desarrollo de piezas gráficas y comunicación de marca."
        ],
        tecnologias: [
            "/icons/canva.svg"
        ]
    },
    {
        id: 3,
        titulo: "DISEÑO 3D (BLENDER)",
        fecha: "31 Agosto, 2023",
        lugar: "CoderHouse",
        descripcion: [
            "Curso de diseño y modelado 3D con Blender, abarcando todo el pipeline de creación de personajes y objetos, desde el modelado inicial hasta el render final.",
            "Se trabajaron fundamentos de diseño 3D, box modeling, modelado low poly, skinning, esculpido digital, topología dinámica y optimización de modelos mediante retopología.",
            "Incluyó creación de accesorios, materiales, UVs, pintura digital, mapas PBR, rigging, posado, iluminación, cámaras y renderizado, desarrollando proyectos completos listos para producción o presentación."
        ],
        tecnologias: [
            "/icons/blender.svg"
        ]
    },
    {
        id: 4,
        titulo: "HTML, CSS Y JAVASCRIPT",
        fecha: "22 Noviembre, 2023",
        lugar: "VinciU",
        descripcion: [
            "Curso orientado a los fundamentos del desarrollo web, abordando la creación de páginas estáticas y dinámicas y la comprensión de frontend y backend dentro de una aplicación web.",
            "Se trabajaron HTML, CSS y JavaScript, incluyendo estructura, semántica, formularios, multimedia, estilos, maquetación con Flexbox y Grid, lógica de programación y manipulación del DOM.",
            "Como cierre, se realizó el deploy de proyectos en Netlify, comprendiendo el flujo básico de publicación de sitios web."
        ],
        tecnologias: [
            "/icons/html5.svg",
            "/icons/css3.svg",
            "/icons/javascript.svg",
            "/icons/github.svg",
            "/icons/git.svg",
        ]
    },
    {
        id: 5,
        titulo: "DESARROLLO WEB FULL STACK",
        fecha: "Abril - Agosto 2025",
        lugar: "Henry Bootcamp",
        descripcion: [
            "Formación intensiva orientada a convertirme en Desarrollador Web Full Stack, dominando todo el flujo de desarrollo de aplicaciones modernas, desde el frontend hasta el backend y bases de datos.",
            "Se trabajaron tecnologías clave como HTML, CSS, JavaScript, React, TypeScript, Node.js, PostgreSQL, Git/GitHub y despliegue en la nube (AWS), junto con buenas prácticas de testing y arquitectura.",
            "La formación prepara para roles de Full Stack, Frontend o Backend Developer, con experiencia práctica en proyectos colaborativos y enfoque en empleabilidad."
        ],
        tecnologias: [
            "/icons/html5.svg",
            "/icons/css3.svg",
            "/icons/javascript.svg",
            "/icons/react.svg",
            "/icons/typescript.svg",
            "/icons/nestjs.svg",
            "/icons/nextjs-icon.svg",
            "/icons/postgresql.svg",
            "/icons/github.svg",
            "/icons/git.svg",
            "/icons/tailwindcss.svg",
            "/icons/mongodb.svg",
        ]
    },
    {
        id: 6,
        titulo: "PASANTÍA DE DESARROLLO WEB",
        fecha: "Noviembre - Diciembre 2025",
        lugar: "E-vior Developments",
        descripcion: [
            "Pasantía intensiva de más de 150 horas centrada en el desarrollo de software y producto dentro de un entorno de startup.",
            "Desempeño como Frontend Developer y Product Owner, participando en el diseño, construcción y lanzamiento de una plataforma frontend, definiendo prioridades y tomando decisiones de producto.",
            "La experiencia integró desarrollo técnico, pensamiento de producto, metodologías ágiles, uso de herramientas modernas e IA, fortaleciendo habilidades de liderazgo, comunicación, resiliencia y mejora continua."
        ],
        tecnologias: [
            "/icons/react.svg",
            "/icons/typescript.svg",
            "/icons/nestjs.svg",
            "/icons/nextjs-icon.svg",
            "/icons/postgresql.svg",
            "/icons/github.svg",
            "/icons/git.svg",
            "/icons/tailwindcss.svg",
            "/icons/supabase.svg"
        ]
    }
];

