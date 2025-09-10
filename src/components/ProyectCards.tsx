import Image from "next/image"
import { useState } from "react"
import { ExternalLink, Eye, Github } from "lucide-react"

type ProjectCardProps = {
  nombre: string
  descripcion: string
  imagen: string
  tags: string[]
  deploy?: string
  github?: string
  onOpenModal: () => void
}

const ProjectCard = ({ nombre, descripcion, imagen, tags, deploy, github, onOpenModal }: ProjectCardProps) => {
  const [hover, setHover] = useState(false)
  const [mostrar, setMostrar] = useState(false)

  return (
    <div
      onMouseEnter={() => {
        setTimeout(() => {
          setMostrar(true)
          setHover(true)
        }, 150)
      }}
      onMouseLeave={() => {
        setMostrar(false)
        setHover(false)
      }}
      className="relative overflow-hidden shadow-md cursor-pointer bg-violet-50 shadow-gray-700 w-72 h-80 rounded-xl"
    >
      <div className="absolute z-30 w-full py-2 text-lg font-semibold text-center text-gray-900 bg-white">
        {nombre}
      </div>

      <div className="relative z-20 h-[100%] overflow-hidden">
        <Image src={imagen} alt={nombre} fill className={`object-cover duration-700 ${hover && "scale-110"}`} />

        <div className={`absolute inset-0 flex justify-center items-start pt-24 bg-black bg-opacity-50 text-white transition-opacity ${hover ? "opacity-100" : "opacity-0"}`}>
          <ul className="flex flex-row gap-4">
            {deploy && (
              <a href={deploy} target="_blank" className="p-2 text-black bg-white rounded-full hover:bg-violet-600 hover:text-white">
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
            {github && (
              <a href={github} target="_blank" className="p-2 text-black bg-white rounded-full hover:bg-violet-600 hover:text-white">
                <Github className="w-5 h-5" />
              </a>
            )}
            <button
              onClick={onOpenModal}
              className="p-2 text-black bg-white rounded-full hover:bg-violet-600 hover:text-white"
            >
              <Eye className="w-5 h-5" />
            </button>
          </ul>
        </div>
      </div>

      <div className={`absolute bottom-0 z-40 flex flex-col gap-3 py-4 px-4 font-medium bg-white text-start rounded-b-xl ${mostrar ? "opacity-100 translate-y-0 duration-200 ease-in transition-all" : "opacity-0 translate-y-10 pointer-events-none"}`}>
        <p className="text-sm text-gray-600">{descripcion}</p>
        <ul className="flex flex-row flex-wrap items-center justify-start gap-2 text-sm">
          {tags.slice(0, 5).map((tag, i) => (
            <li 
              key={i} 
              className="px-6 font-medium bg-violet-300 rounded-xl w-fit text-violet-700"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProjectCard
