'use client';

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/context/translations";

export const useTranslation = () => {
  const { language } = useLanguage();
  
  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key "${key}" not found for language "${language}"`);
        return key;
      }
    }
    
    return value || key;
  };

  return { t, language };
};