'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1 text-sm font-medium text-black transition-all duration-300 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:scale-105"
      aria-label={`Cambiar a ${language === 'es' ? 'inglés' : 'español'}`}
    >
      <Globe className="w-4 h-4" />
      <span className="font-mono">
        {language === 'es' ? 'EN' : 'ES'}
      </span>
    </button>
  );
};

export default LanguageToggle;