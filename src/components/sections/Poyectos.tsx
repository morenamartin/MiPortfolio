'use client';
import ProyectoCard from './ProyectoCard';
import { useTranslation } from '@/hooks/useTranslation';

const Proyectos = () => {
    const { t } = useTranslation();
    
    // Crear proyectos usando traducciones
    const proyectos = [
        {
            id: 1,
            nombre: t('proyectos.project1.nombre'),
            descripcion: t('proyectos.project1.descripcion'),
            miRol: t('proyectos.project1.miRol'),
            tecnologias: ["Next.js", "React", "Tailwind", "TypeScript", "Flowbite-React", "Formik + Yup"],
            imagen: "/proyectos/ascensoresmg.png",
            linkProyecto: "https://www.ascensoresmgsrl.com.ar/",
            linkCodigo: ""
        },
        {
            id: 2,
            nombre: t('proyectos.project2.nombre'),
            descripcion: t('proyectos.project2.descripcion'),
            miRol: t('proyectos.project2.miRol'),
            tecnologias: ["Next.js", "Tailwind CSS", "TypeScript", "React", "Formik + Yup", "MercadoPago"],
            imagen: "/proyectos/psymatch.jpg",
            linkProyecto: "https://psy-match-frontend.vercel.app/",
            linkCodigo: "https://github.com/PsyMatch/PsyMatch-Frontend"
        },
        {
            id: 3,
            nombre: t('proyectos.project3.nombre'),
            descripcion: t('proyectos.project3.descripcion'),
            miRol: t('proyectos.project3.miRol'),
            tecnologias: ["Next.js", "React", "Formik", "Tailwind CSS", "TypeScript", "Axios"],
            imagen: "/proyectos/ecommerce.png",
            linkProyecto: "https://pm4-e-commerce.vercel.app/",
            linkCodigo: "https://github.com/morenamartin/PM4-e-commerce"
        },
        {
            id: 4,
            nombre: t('proyectos.project4.nombre'),
            descripcion: t('proyectos.project4.descripcion'),
            miRol: t('proyectos.project4.miRol'),
            tecnologias: ["Next.js", "Tailwind CSS", "TypeScript", "React", "NestJS", "PostgreSQL"],
            imagen: "/proyectos/paginascompartidas.png",
            linkProyecto: "",
            linkCodigo: ""
        }
    ];
    return (
        <div className="w-full bg-black">
            {proyectos.map((proyecto, index) => (
                <section 
                    key={proyecto.id}
                    id={index === 0 ? "proyectos" : undefined}
                    className="w-full section"
                >
                    <ProyectoCard 
                        proyecto={proyecto} 
                        index={index}
                    />
                </section>
            ))}
        </div>
    );
};

export default Proyectos;