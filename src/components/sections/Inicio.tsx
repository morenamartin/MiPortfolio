"use client"
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const Inicio = () => {
    const { t } = useTranslation();
    
    return (
        <section className="flex flex-col items-center justify-center h-screen bg-black section">
            <h1 className="font-bold text-white text-7xl">{t('inicio.greeting')}</h1>
            <h1 className="font-bold text-white text-7xl">{t('inicio.name')}</h1>
            <h1 className="font-bold text-[#6A0C7D] text-7xl">{t('inicio.role')}</h1>
            <p className="w-7/12 mt-4 font-mono text-xl text-center text-white">{t('inicio.description')}</p>
            <a 
                href="/CV-MorenaMartin-FullStack.pdf" 
                download="CV-MorenaMartin-FullStack.pdf"
                className="flex items-center gap-4 mt-6 px-6 py-1.5 border-2 border-white hover:bg-white text-white hover:text-black transition-all duration-300 cursor-pointer"
            >
                <span className='font-mono font-semibold '>{t('inicio.downloadCV')}</span>
                <span>
                    <Download className="w-5 h-5 " />
                </span>
            </a>
            <div className='flex items-center gap-4 mt-4'>
                <a href="https://www.linkedin.com/in/morena-martín-979756308" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-6 h-6 text-white transition-colors duration-300 cursor-pointer hover:text-gray-300" />
                </a>
                <a href="https://github.com/morenamartin" target="_blank" rel="noopener noreferrer">
                    <Github className="w-6 h-6 text-white transition-colors duration-300 cursor-pointer hover:text-gray-300" />
                </a>
                <a href="https://mail.google.com/mail/?view=cm&to=martinmorena269@gmail.com&su=Contacto%20desde%20Portfolio&body=Hola%20Morena,%20me%20gustaría%20contactarte." target="_blank" rel="noopener noreferrer">
                    <Mail className="w-6 h-6 text-white transition-colors duration-300 cursor-pointer hover:text-gray-300" />
                </a>
            </div>
        </section>
    );
}

export default Inicio;