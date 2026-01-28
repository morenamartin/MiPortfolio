"use client"
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const Inicio = () => {
    const { t } = useTranslation();
    
    return (
        <section className="flex flex-col items-center justify-center h-screen bg-white dark:bg-black section px-4 sm:px-6 lg:px-8">
            <h1 className="font-bold text-black dark:text-white text-5xl sm:text-6xl md:text-7xl lg:text-7xl text-center">{t('inicio.greeting')}</h1>
            <h1 className="font-bold text-black dark:text-white text-5xl sm:text-6xl md:text-7xl lg:text-7xl text-center">{t('inicio.name')}</h1>
            <h1 className="font-bold text-purple-600 dark:text-purple-400 text-5xl sm:text-6xl md:text-7xl lg:text-7xl text-center">{t('inicio.role')}</h1>
            <p className="w-full sm:w-10/12 md:w-8/12 lg:w-7/12 mt-4 sm:mt-6 font-mono text-base sm:text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 px-2">{t('inicio.description')}</p>
            <a 
                href="/CV-MorenaMartin-FullStack.pdf" 
                download="CV-MorenaMartin-FullStack.pdf"
                className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8 px-4 sm:px-6 py-2 sm:py-1.5 border-2 border-black dark:border-white hover:bg-black dark:hover:bg-white text-black dark:text-white hover:text-white dark:hover:text-black transition-all duration-300 cursor-pointer text-sm sm:text-base"
            >
                <span className='font-mono font-semibold'>{t('inicio.downloadCV')}</span>
                <span>
                    <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                </span>
            </a>
            <div className='flex items-center gap-4 sm:gap-6 mt-4 sm:mt-6'>
                <a href="https://www.linkedin.com/in/morena-martín-979756308" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-6 h-6 text-black dark:text-white transition-colors duration-300 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300" />
                </a>
                <a href="https://github.com/morenamartin" target="_blank" rel="noopener noreferrer">
                    <Github className="w-6 h-6 text-black dark:text-white transition-colors duration-300 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300" />
                </a>
                <a href="https://mail.google.com/mail/?view=cm&to=martinmorena269@gmail.com&su=Contacto%20desde%20Portfolio&body=Hola%20Morena,%20me%20gustaría%20contactarte." target="_blank" rel="noopener noreferrer">
                    <Mail className="w-6 h-6 text-black dark:text-white transition-colors duration-300 cursor-pointer hover:text-gray-600 dark:hover:text-gray-300" />
                </a>
            </div>
        </section>
    );
}

export default Inicio;