import { ClipboardList, Clock, MessageCircle, Repeat, Target, Users } from "lucide-react"

const Habilidades = () => {
    return (
        <div className="mt-36 px-40 pb-20">
            <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold mb-2 text-gray-700">Habilidades Blandas</h1>
                <div className="bg-violet-600 h-1 w-20"></div>
            </div>

            <div className="grid grid-cols-3 justify-items-center gap-6 px-20 mt-14">
                <div className="h-40 w-64 rounded-lg shadow-md shadow-gray-400 hover:shadow-gray-500 hover:shadow-md flex flex-col justify-center items-center gap-4">
                    <div className="bg-[#6639b4] rounded-xl w-12 h-12 flex items-center justify-center text-white">
                        <Users />
                    </div>
                    <span className="font-semibold text-base text-gray-800">Trabajo en equipo</span>
                </div>
                <div className="h-40 w-64 rounded-lg shadow-md shadow-gray-400 hover:shadow-gray-500 hover:shadow-md flex flex-col justify-center items-center gap-4">
                    <div className="bg-[#7c3aed] rounded-xl w-12 h-12 flex items-center justify-center text-white">
                        <MessageCircle />
                    </div>
                    <span className="font-semibold text-base text-gray-800">Comunicación Eficaz</span>
                </div>
                <div className="h-40 w-64 rounded-lg shadow-md shadow-gray-400 hover:shadow-gray-500 hover:shadow-md flex flex-col justify-center items-center gap-4">
                    <div className="bg-[#955cf6] rounded-xl w-12 h-12 flex items-center justify-center text-white">
                        <Target />
                    </div>
                    <span className="font-semibold text-base text-gray-800">Orientación a resultados</span>
                </div>
                <div className="h-40 w-64 rounded-lg shadow-md shadow-gray-400 hover:shadow-gray-500 hover:shadow-md flex flex-col justify-center items-center gap-4">
                    <div className="bg-[#9d66fa] rounded-xl w-12 h-12 flex items-center justify-center text-white">
                        <Clock />
                    </div>
                    <span className="font-semibold text-base text-gray-800">Gestión del tiempo</span>
                </div>
                <div className="h-40 w-64 rounded-lg shadow-md shadow-gray-400 hover:shadow-gray-500 hover:shadow-md flex flex-col justify-center items-center gap-4">
                    <div className="bg-[#6928d9] rounded-xl w-12 h-12 flex items-center justify-center text-white">
                        <ClipboardList />
                    </div>
                    <span className="font-semibold text-base text-gray-800">Organización</span>
                </div>
                <div className="h-40 w-64 rounded-lg shadow-md shadow-gray-400 hover:shadow-gray-500 hover:shadow-md flex flex-col justify-center items-center gap-4">
                    <div className="bg-[#6e3fbe] rounded-xl w-12 h-12 flex items-center justify-center text-white">
                        <Repeat />
                    </div>
                    <span className="font-semibold text-base text-gray-800">Adaptabilidad</span>
                </div>
            </div>

        </div>
    )
}

export default Habilidades