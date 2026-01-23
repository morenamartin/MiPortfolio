import Image from 'next/image';

interface TimelineItemProps {
    titulo: string;
    fecha: string;
    lugar: string;
    descripcion: string[];
    tecnologias: string[];
}

const TimelineItem = ({ titulo, fecha, lugar, descripcion, tecnologias }: TimelineItemProps) => {
    return (
        <div className="flex gap-8 h-[80vh] snap-start items-center px-8">
            {/* Contenido principal */}
            <div className="flex-1">
                <h2 className="text-4xl font-bold uppercase mb-2">{titulo}</h2>
                <p className="text-xl text-violet-300 mb-1">{fecha}</p>
                <p className="text-lg text-gray-400 mb-6">{lugar}</p>
                
                <div className="space-y-4 text-base leading-relaxed">
                    {descripcion.map((parrafo, index) => (
                        <p key={index}>{parrafo}</p>
                    ))}
                </div>
            </div>

            {/* Columna de tecnologías */}
            <div className="self-start grid gap-4 pt-20" style={{
                gridAutoFlow: 'column',
                gridTemplateRows: 'repeat(7, auto)',
                gridAutoColumns: 'max-content'
            }}>
                {tecnologias.map((tech, index) => (
                    <div 
                        key={index}
                        className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
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
