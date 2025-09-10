"use client"
import { useState } from "react"
import ECommerce from "./proyectos/ECommerce"
import PsyMatch from "./proyectos/Psymatch"
import Ascensores from "./proyectos/Ascensores"

export const categories = [
  { id: 1, nombre: "Proyecto 1", tipo: "Henry", component: <ECommerce /> },
  { id: 2, nombre: "Proyecto 2", tipo: "Freelance", component: <Ascensores /> },
  { id: 3, nombre: "Proyecto 3", tipo: "Henry", component: <PsyMatch /> },
]

const Proyectos = () => {
    const [filtroActivo, setFiltroActivo] = useState("Todos")

    return (
        <div className="mt-16 px-40 pb-20">
            <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold mb-2 text-gray-700">Proyectos</h1>
                <div className="bg-violet-600 h-1 w-20"></div>
            </div>


            <div className="mt-10">
                <div className="w-fit grid grid-cols-3 gap-6 m-auto">
                    <button className={`${filtroActivo === "Todos" && "bg-violet-500 text-white"} px-6 py-1 rounded-full`} onClick={() => setFiltroActivo("Todos")}>Todos</button>
                    <button className={`${filtroActivo === "Henry" && "bg-violet-500 text-white"} px-6 py-1 rounded-full`} onClick={() => setFiltroActivo("Henry")}>Henry</button>
                    <button className={`${filtroActivo === "Freelance" && "bg-violet-500 text-white"} px-6 py-1 rounded-full`} onClick={() => setFiltroActivo("Freelance")}>Freelance</button>
                </div>
            </div>


            <div className="grid grid-cols-3 gap-5 justify-items-center mt-10">
                {(filtroActivo === "Todos" ? categories : categories.filter(proy => proy.tipo === filtroActivo))
                    .map(proy => (
                    <div key={proy.id}>
                        {proy.component}
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Proyectos