"use client";
import ProyectoCard from './ProyectoCard';
import { proyectos } from '@/helpers/proyectos';

const Proyectos = () => {
    return (
        <>
            {proyectos.map((proyecto, index) => (
                <section 
                    key={proyecto.id}
                    className="w-full h-screen bg-black section"
                >
                    <ProyectoCard 
                        proyecto={proyecto} 
                        reversed={index % 2 !== 0}
                    />
                </section>
            ))}
        </>
    );
};

export default Proyectos;