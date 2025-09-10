import { Code, CoffeeIcon, Heart } from "lucide-react"

const SobreMi = ({ id }: { id: string }) => {
    return (
        <div id={id} className="px-40 h-fit mt-14 mb-14">
            <div className="flex flex-col items-center">
                <h1 className="mb-2 text-4xl font-bold text-gray-700">Sobre mí</h1>
                <div className="w-20 h-1 bg-violet-600"></div>
            </div>
            <div className="grid grid-cols-2 mt-20 place-items-center">
                
                <div className="flex flex-col gap-6">
                    <p className="text-lg font-normal text-gray-700">Soy una desarrolladora frontend apasionada por crear experiencias digitales excepcionales. Mi formación en Henry me ha proporcionado una base sólida en tecnologías modernas y metodologías ágiles.</p>
                    <p className="text-lg font-normal text-gray-700">Me especializo en React, JavaScript y el ecosistema de desarrollo web moderno. Disfruto trabajando en equipos colaborativos y estoy siempre buscando aprender nuevas tecnologías y mejores prácticas.</p>
                    <p className="text-lg font-normal text-gray-700">Actualmente trabajo en proyectos freelance mientras busco oportunidades para unirme a un equipo dinámico donde pueda contribuir y seguir creciendo profesionalmente.</p>
                </div>

                <div className="grid grid-rows-3 gap-14">

                    <div className="flex flex-col pl-20">
                        <div className="flex flex-row items-center gap-4">
                            <div className="bg-[#7c3aed] rounded-xl w-12 h-12 flex items-center justify-center text-white">
                                <Code />
                            </div>
                            <span className="text-xl font-semibold">Desarrollo Frontend</span>
                        </div>
                        <p className="w-[450px] text-gray-700 mt-4">
                            Especializada en crear interfaces modernas, responsive y optimizadas para la mejor experiencia de usuario.
                        </p>
                    </div>

                    <div className="flex flex-col pl-20">
                        <div className="flex flex-row items-center gap-4">
                            <div className="bg-[#955cf6] rounded-xl w-12 h-12 flex items-center justify-center text-white">
                                <Heart />
                            </div>
                            <span className="text-xl font-semibold">Pasión por el Diseño</span>
                        </div>
                        <p className="w-[450px] text-gray-700 mt-4">
                            Combinando funcionalidad con estética para crear productos digitales que no solo funcionan bien, sino que también se ven increíbles.
                        </p>
                    </div>
                    <div className="flex flex-col pl-20">
                        <div className="flex flex-row items-center gap-4">
                            <div className="bg-[#b48bfa] rounded-xl w-12 h-12 flex items-center justify-center text-white">
                                <CoffeeIcon />
                            </div>
                            <span className="text-xl font-semibold">Aprendizaje Continuo</span>
                        </div>
                        <p className="w-[450px] text-gray-700 mt-4">
                            Siempre explorando nuevas tecnologías y metodologías para mantenerme al día con las últimas tendencias del desarrollo web.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default SobreMi