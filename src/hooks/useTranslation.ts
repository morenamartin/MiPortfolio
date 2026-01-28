'use client';

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/context/translations";

export const useTranslation = () => {
  const { language } = useLanguage();
  
  const t = (key: string) => {
    const keys = key.split('.');
    let value: unknown = (translations as Record<string, unknown>)[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        const record = value as Record<string, unknown>;
        if (k in record) {
          value = record[k];
          continue;
        }
      }
      console.warn(`Translation key "${key}" not found for language "${language}"`);
      return key;
    }
    
    return typeof value === 'string' ? value : key;
  };

  return { t, language };
};