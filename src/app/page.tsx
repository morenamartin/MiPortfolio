import Contacto from "@/components/sections/Contacto";
import EducacionExperiencia from "@/components/sections/EducacionExperiencia";
import Inicio from "@/components/sections/Inicio";
import Proyectos from "@/components/sections/Poyectos";
import SobreMi from "@/components/sections/SobreMi";
import SoftSkills from "@/components/sections/SoftSkills";
import Tecnologias from "@/components/sections/Tecnologias";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <section id="inicio" className="section">
        <Inicio />
      </section>
      <section id="sobre-mi" className="flex flex-col items-center justify-center bg-black section" data-has-subscroll="true">
        <SobreMi />
      </section>
      <section id="habilidades" className="section">
        <SoftSkills />
      </section>
      <section id="tecnologias" className="bg-black section">
        <Tecnologias />
      </section>
      <section id="educacion-experiencia" className="bg-black section">
        <EducacionExperiencia />
      </section>
      <section id="frase" className="bg-black section">
        <span className="text-white">ACA VA UNA FRASE</span>
      </section>
      <Proyectos />
      <section id="contacto" className="bg-black section">
        <Contacto />
      </section>
    </SmoothScroll>
  )
}