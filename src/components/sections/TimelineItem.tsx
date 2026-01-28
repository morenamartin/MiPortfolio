import Image from 'next/image';

interface TimelineItemProps {
    titulo: string;
    fecha: string;
    lugar: string;
    descripcion: string[];
    tecnologias: string[];
    isMobile?: boolean;
}

const TimelineItem = ({ titulo, fecha, lugar, descripcion, tecnologias, isMobile = false }: TimelineItemProps) => {
    if (isMobile) {
        // Layout para móvil - cada experiencia ocupa al menos la pantalla (min-h) y no fuerza solapamientos
        return (
            <div className="flex flex-col min-h-screen snap-start px-6 py-8 text-white justify-between">
                {/* Contenido principal */}
                <div className="flex-1 flex flex-col justify-center space-y-6">
                    <div className="text-center mb-8">
                        <h2 className="text-xl sm:text-2xl font-bold uppercase mb-3 text-black dark:text-white leading-tight px-2">{titulo}</h2>
                        <p className="text-base sm:text-lg text-purple-600 dark:text-violet-300 mb-2 font-medium">{fecha}</p>
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6">{lugar}</p>
                    </div>
                    
                    <div className="space-y-4 text-sm sm:text-base leading-relaxed text-black dark:text-white px-2 max-h-[38vh] overflow-y-auto">
                        {descripcion.map((parrafo, index) => (
                            <p key={index} className="text-justify">{parrafo}</p>
                        ))}
                    </div>
                </div>

                {/* Tecnologías en móvil - mejor distribuidas */}
                <div className="flex-none mt-8 pb-8">
                    <h3 className="text-center text-sm font-semibold text-gray-600 dark:text-gray-400 mb-4 uppercase tracking-wide">Tecnologías</h3>
                    <div className="flex flex-wrap justify-center gap-3 max-w-sm mx-auto">
                        {tecnologias.map((tech, index) => (
                            <div 
                                key={index}
                                className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-black/10 dark:bg-white/10 rounded-xl hover:bg-black/20 dark:hover:bg-white/20 transition-all duration-200 hover:scale-105"
                            >
                                <Image 
                                    src={tech} 
                                    alt="" 
                                    width={28} 
                                    height={28}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // Layout para desktop - restaurado al original
    return (
        <div className="flex gap-8 h-[80vh] snap-start items-center px-8">
            {/* Contenido principal */}
            <div className="flex-1">
                <h2 className="text-4xl font-bold uppercase mb-2 text-black dark:text-white">{titulo}</h2>
                <p className="text-xl text-purple-600 dark:text-violet-300 mb-1">{fecha}</p>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">{lugar}</p>
                
                <div className="space-y-4 text-base leading-relaxed text-black dark:text-white">
                    {descripcion.map((parrafo, index) => (
                        <p key={index}>{parrafo}</p>
                    ))}
                </div>
            </div>

            {/* Columna de tecnologías - desktop */}
            <div className="self-start grid gap-4 pt-20" style={{
                gridAutoFlow: 'column',
                gridTemplateRows: 'repeat(7, auto)',
                gridAutoColumns: 'max-content'
            }}>
                {tecnologias.map((tech, index) => (
                    <div 
                        key={index}
                        className="w-12 h-12 flex items-center justify-center bg-black/10 dark:bg-white/10 rounded-lg hover:bg-black/20 dark:hover:bg-white/20 transition-colors"
                    >
                        <Image 
                            src={tech} 
                            alt="" 
                            width={32} 
                            height={32}
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TimelineItem;
