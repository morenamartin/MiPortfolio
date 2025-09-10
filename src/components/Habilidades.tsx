import { ClipboardList, Clock, MessageCircle, Repeat, Target, Users } from "lucide-react"

const habilidades = [
    {
        icono: <Users />,
        texto: "Trabajo en equipo",
        color: "#6639b4"
    },
    {
        icono: <MessageCircle />,
        texto: "Comunicación Eficaz",
        color: "#7c3aed"
    },
    {
        icono: <Target />,
        texto: "Orientación a resultados",
        color: "#955cf6"
    },
    {
        icono: <Clock />,
        texto: "Gestión del tiempo",
        color: "#9d66fa"
    },
    {
        icono: <ClipboardList />,
        texto: "Organización",
        color: "#6928d9"
    },
    {
        icono: <Repeat />,
        texto: "Adaptabilidad",
        color: "#6e3fbe"
    },
]

const Habilidades = ({ id }: { id: string }) => {
    return (
        <div id={id} className="pb-20 md:px-40 mt-36">
            <div className="flex flex-col items-center">
                <h1 className="mb-2 text-4xl font-bold text-gray-700">Soft Skills</h1>
                <div className="w-20 h-1 bg-violet-600"></div>
            </div>

            <div className="grid grid-cols-1 gap-12 lg:px-20 md:grid-cols-2 lg:grid-cols-3 justify-items-center mt-14">

            {
                habilidades.map((hab, index) => (
                    <div key={index} className="flex flex-col items-center justify-center w-64 h-40 gap-4 rounded-lg shadow-md shadow-gray-400 hover:shadow-gray-500 hover:shadow-md">
                        <div className={`bg-[#955cf6] rounded-xl w-12 h-12 flex items-center justify-center text-white`}>
                            {hab.icono}
                        </div>
                        <span className="text-base font-semibold text-gray-800">{hab.texto}</span>
                    </div>

                ))
            }

            </div>

        </div>
    )
}

export default Habilidades