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
      <section id="sobre-mi" className="flex flex-col items-center justify-center bg-white dark:bg-black section" data-has-subscroll="true">
        <SobreMi />
      </section>
      <section id="habilidades" className="section">
        <SoftSkills />
      </section>
      <section id="tecnologias" className="bg-white dark:bg-black section">
        <Tecnologias />
      </section>
      <section id="educacion-experiencia" className="bg-white dark:bg-black section">
        <EducacionExperiencia />
      </section>
      {/* <section id="frase" className="bg-white dark:bg-black section">
        <span className="text-black dark:text-white">ACA VA UNA FRASE</span>
      </section> */}
      <section id="proyectos-section" className="bg-white dark:bg-black">
        <Proyectos />
      </section>
      <section id="contacto" className="bg-white dark:bg-black section">
        <Contacto />
      </section>
    </SmoothScroll>
  )
}