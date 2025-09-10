"use client"
import { useModalContext } from "@/context/moduloEcommerce"
import { ExternalLink, Github, X } from "lucide-react"
import Image from "next/image"

type ProjectModalProps = {
  nombre: string
  descripcion: string
  descripcionModal?: string
  aprendi?: string
  imagen: string
  tags: string[]
  deploy?: string
  github?: string
  closeModal: () => void
}

const ModalEcommerce = ({ nombre, descripcion, imagen, tags, deploy, github, descripcionModal, aprendi }: ProjectModalProps) => {
    const {cerrarModal} = useModalContext()
    return (
        <div className="lg:w-[80%] z-50 h-[85%] md:h-fit lg:h-[85%] rounded-2xl bg-[#f8f8ec] px-10 shadow-lg overflow-scroll shadow-gray-800">
            <div className="flex flex-row justify-between pt-8">
                <p className="text-xl font-bold text-gray-600">{nombre}</p>
                <button onClick={() => cerrarModal()}><X className="text-gray-600"/></button>
            </div>
            <div className="relative flex justify-center w-full pt-10 m-auto overflow-hidden rounded-xl h-72">
                <Image src={imagen} fill alt="imagen proyecto" className="object-cover w-full h-full mt-6"/>
            </div>
            <div className="mt-8">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Descripción</h3>
                <p className="text-lg text-gray-600">{descripcionModal}</p>
            </div>
            <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900">Tecnologías</h3>
                <ul className="flex flex-row flex-wrap items-center justify-start gap-2 mt-4 text-base">
                    {tags.map((tag, index) => (
                        <li key={index} className="px-4 font-medium bg-violet-300 rounded-xl w-fit text-violet-700">{tag}</li>
                    ))}
                </ul>
            </div>
            {aprendi && <div className="mt-8">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Lo que aprendí</h3>
                <p className="text-lg text-gray-600">{aprendi}</p>
            </div>}

            <div className="flex flex-col gap-4 mt-8 mb-4 md:flex-row">
                <a 
                href={deploy} 
                target="_blank" 
                className="flex flex-row items-center justify-center gap-2 px-4 py-2 font-semibold text-white rounded-lg h-fit bg-violet-600 hover:bg-violet-800">
                    <ExternalLink className="w-5 h-5 stroke-2"/>Ver Proyecto
                    </a>
                <a href={github} target="_blank" className="justify-center border-[1px] border-gray-300 hover:border-gray-500 flex flex-row gap-2 px-4 items-center py-2 h-fit rounded-lg text-gray-600"><Github className="w-5 h-5 stroke-2"/>Código</a>
            </div>     
        </div>
    )
}

export default ModalEcommerce