import Inicio from "@/components/sections/Inicio";
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
      <section id="proyectos" className="bg-purple-500 section">
        <h1 className="text-6xl font-bold text-white">PROYECTOS</h1>
      </section>
      <section id="contacto" className="bg-pink-500 section">
        <h1 className="text-6xl font-bold text-white">CONTACTO</h1>
      </section>
    </SmoothScroll>
  )
}