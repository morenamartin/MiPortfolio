import Habilidades from "@/components/Habilidades";
import Inicio from "@/components/Inicio";
import Proyectos from "@/components/Proyectos";
import SobreMi from "@/components/SobreMi";
import Teconologias from "@/components/Tecnologias";

export default function Home() {
  return (
    <>
      <Inicio />
      <SobreMi />
      <Habilidades />
      <Teconologias />
      <Proyectos />
    </>
  )
}