import { Download, Github, Linkedin, Mail } from 'lucide-react';

const Inicio = () => {
    return (
        <section id="inicio" className="flex flex-col items-center justify-center h-screen bg-black section">
            <h1 className="font-bold text-white text-7xl">HOLA!</h1>
            <h1 className="font-bold text-white text-7xl">SOY MORENA MARTÍN</h1>
            <h1 className="font-bold text-[#6A0C7D] text-7xl">Desarrolladora Full Stack</h1>
            <p className="w-7/12 mt-4 font-mono text-xl text-center text-white">Especializada en crear experiencias web modernas y funcionales. Apasionada por el código limpio, el diseño intuitivo y las nuevas tecnologías</p>
            <div className="flex items-center gap-4 mt-6 px-6 py-1.5 border-2 border-white">
                <span className='font-mono font-semibold text-white'>Descargar CV</span>
                <span>
                    <Download className="w-5 h-5 text-white" />
                </span>
            </div>
            <div className='flex items-center gap-4 mt-4'>
                <Linkedin className="w-6 h-6 text-white hover:text-gray-300" />
                <Github className="w-6 h-6 text-white hover:text-gray-300" />
                <Mail className="w-6 h-6 text-white hover:text-gray-300" />
            </div>
        </section>
    );
}

export default Inicio;