"use client"
import Contacto from "@/components/Contacto";
import Habilidades from "@/components/Habilidades";
import Inicio from "@/components/Inicio";
import Proyectos from "@/components/Proyectos";
import SobreMi from "@/components/SobreMi";
import Teconologias from "@/components/Tecnologias";

export default function Home() {
  return (
    <>
      <Inicio id="inicio" />
      <SobreMi id="sobre-mi" />
      <Habilidades id="habilidades" />
      <Teconologias id="tecnologias" />
      <Proyectos id="proyectos" />
      <Contacto id="contacto" />
    </>
  )
}