"use client"
import { useState } from "react"
import ProjectCard from "./ProyectCards"
import { useModalContext } from "@/context/moduloEcommerce"
import ModalEcommerce from "./modal/ModalEcommerce"
import { categories } from "@/helpers/proyectos"

type Proyecto = {
  id: number
  nombre: string
  tipo: string
  descripcion: string
  descripcionModal?: string
  aprendi?: string
  imagen: string
  tags: string[]
  deploy?: string
  github?: string
}


const Proyectos = ({ id }: { id: string }) => {
    const [filtroActivo, setFiltroActivo] = useState("Todos")
    const [proyectoActivo, setProyectoActivo] = useState<Proyecto | null>(null)
    const {abrirModal, cerrarModal, modal} =useModalContext()

    return (
        <div id={id} className="px-40 pb-20 mt-16">
            <div className="flex flex-col items-center">
                <h1 className="mb-2 text-4xl font-bold text-gray-700">Proyectos</h1>
                <div className="w-20 h-1 bg-violet-600"></div>
            </div>


            <div className="mt-10">
                <div className="grid grid-cols-3 gap-6 m-auto w-fit">
                    <button className={`${filtroActivo === "Todos" && "bg-violet-500 text-white"} px-6 py-1 rounded-full`} onClick={() => setFiltroActivo("Todos")}>Todos</button>
                    <button className={`${filtroActivo === "Henry" && "bg-violet-500 text-white"} px-6 py-1 rounded-full`} onClick={() => setFiltroActivo("Henry")}>Henry</button>
                    <button className={`${filtroActivo === "Freelance" && "bg-violet-500 text-white"} px-6 py-1 rounded-full`} onClick={() => setFiltroActivo("Freelance")}>Freelance</button>
                </div>
            </div>


            <div className="grid grid-cols-3 gap-5 mt-10 justify-items-center">
                {(filtroActivo === "Todos" ? categories : categories.filter(proy => proy.tipo === filtroActivo))
              .map(proy => (
                <ProjectCard
                  key={proy.id}
                  nombre={proy.nombre}
                  descripcion={proy.descripcion}
                  imagen={proy.imagen}
                  tags={proy.tags}
                  deploy={proy.deploy}
                  github={proy.github}
                  onOpenModal={() => {
                    setProyectoActivo(proy)
                    abrirModal()} 
                  }
                />
                ))}
            </div>

           {modal && proyectoActivo && (
            <div className="fixed top-0 left-0 z-40 w-full h-full flex items-center justify-center px-40 bg-[#00000094]">
              <ModalEcommerce
                nombre={proyectoActivo.nombre}
                descripcion={proyectoActivo.descripcion}
                descripcionModal={proyectoActivo.descripcionModal}
                aprendi={proyectoActivo.aprendi}
                imagen={proyectoActivo.imagen}
                tags={proyectoActivo.tags}
                deploy={proyectoActivo.deploy}
                github={proyectoActivo.github}
                closeModal={() => {
                  cerrarModal()
                  setProyectoActivo(null)
                }}
              />
            </div>
          )} 

        </div>

  
    )
}

export default Proyectos