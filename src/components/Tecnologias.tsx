import reactLogo from "@/assets/frontend/react-original.svg"
import typescriptLogo from "@/assets/frontend/typescript-original.svg"
import javaLogo from "@/assets/frontend/javascript-original.svg"
import htmlLogo from "@/assets/frontend/html5-original.svg"
import cssLogo from "@/assets/frontend/css3-original.svg"
import tailwindLogo from "@/assets/frontend/Tailwind_CSS_Logo.svg.png"
import logoNext from "@/assets/frontend/logoNext.png"

import expressLogo from "@/assets/backend/express-original.svg"
import postgresLogo from "@/assets/backend/postgresql-original.svg"
import mongoLogo from "@/assets/backend/mongodb-original.svg"

import githubLogo from "@/assets/herramientas/github-original.svg"
import vsLogo from "@/assets/herramientas/vscode-original.svg"
import figmaLogo from "@/assets/herramientas/figma-original.svg"
import insomniaLogo from "@/assets/herramientas/insomnia-icon.png"

import Image from "next/image"

const tecnologiasFrontend = [
    {
        icono: reactLogo,
        nombre: "React"
    },
    {
        icono: logoNext,
        nombre: "NextJS"
    },
    {
        icono: typescriptLogo,
        nombre: "TypeScript"
    },
    {
        icono: javaLogo,
        nombre: "JavaScript"
    },
    {
        icono: htmlLogo,
        nombre: "HTML 5"
    },
    {
        icono: cssLogo,
        nombre: "CSS 3"
    },
    {
        icono: tailwindLogo,
        nombre: "Tailwind"
    },
]

const tecnologiasBackend = [
    {
        icono: expressLogo,
        nombre: "Express"
    },
    {
        icono: postgresLogo,
        nombre: "PostgreSQL"
    },
    {
        icono: mongoLogo,
        nombre: "MongoDB"
    },
]

const herramientas = [
    {
        icono: githubLogo,
        nombre: "GitHub"
    },
    {
        icono: vsLogo,
        nombre: "VS Code"
    },
    {
        icono: figmaLogo,
        nombre: "Figma"
    },
    {
        icono: insomniaLogo,
        nombre: "Insomnia"
    },
]

const Teconologias = ({ id }: { id: string }) => {
    return (
        <div id={id} className="px-4 pb-20 lg:px-40 mt-28">
            <div className="flex flex-col items-center">
                <h1 className="mb-2 text-4xl font-bold text-gray-700">Tecnologías</h1>
                <div className="w-20 h-1 bg-violet-600"></div>
            </div>


            <div className="flex flex-col items-center mt-16">
                <h2 className="text-xl font-bold text-gray-800">Frontend</h2>
                <div className="grid w-full grid-cols-2 gap-4 py-6 md:px-12 justify-items-center md:flex md:flex-row md:flex-wrap">
                    {tecnologiasFrontend.map((tec, index) => (
                        <div key={index} className="flex flex-col items-center justify-center gap-4 duration-500 hover:scale-105 w-40 h-36 rounded-xl bg-[#f4f5f7] hover:shadow-md  hover:shadow-gray-400">
                            <Image src={tec.icono} alt="react logo"width={50} height={50}/>
                            <span>{tec.nombre}</span>
                        </div>
                    ))}
                </div>
            </div>


            <div className="flex flex-col items-center mt-16">
                <h2 className="text-xl font-bold text-gray-800">Backend & Database</h2>
                <div className="grid justify-start w-full grid-cols-2 gap-4 py-6 md:flex md:flex-row md:px-12">
                    {tecnologiasBackend.map((tec, index) => (
                        <div key={index} className="flex flex-col items-center justify-center gap-4 duration-500 hover:scale-105 w-40 h-36 rounded-xl bg-[#f4f5f7] hover:shadow-md  hover:shadow-gray-400">
                            <Image src={tec.icono} alt="react logo"width={50} height={50}/>
                            <span>{tec.nombre}</span>
                        </div>
                    ))}
                </div>
            </div>


            <div className="flex flex-col items-center mt-16">
                <h2 className="text-xl font-bold text-gray-800">Herramientas</h2>
                <div className="grid justify-start w-full grid-cols-2 gap-4 py-6 md:flex md:flex-row md:px-12">
                    {herramientas.map((tec, index) => (
                        <div key={index} className="flex flex-col items-center justify-center gap-4 duration-500 hover:scale-105 w-40 h-36 rounded-xl bg-[#f4f5f7] hover:shadow-md  hover:shadow-gray-400">
                            <Image src={tec.icono} alt="react logo"width={50} height={50}/>
                            <span>{tec.nombre}</span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Teconologias