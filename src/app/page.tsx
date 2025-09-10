"use client"
import Habilidades from "@/components/Habilidades";
import Inicio from "@/components/Inicio";
import ModalEcommerce from "@/components/modal/ModalEcommerce";

import Proyectos from "@/components/Proyectos";
import SobreMi from "@/components/SobreMi";
import Teconologias from "@/components/Tecnologias";
import { useModalContext } from "@/context/moduloEcommerce";

export default function Home() {
  const {modal} = useModalContext()
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