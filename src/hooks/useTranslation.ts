'use client';

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/context/translations";

export const useTranslation = () => {
  const { language } = useLanguage();
  
  // Devuelve el valor traducido (puede ser string o cualquier otro tipo, p. ej. string[])
  const t = <T = unknown>(key: string, fallback?: T): T | string => {
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
      return (fallback !== undefined ? fallback : key) as unknown as string;
    }
    
    return (value as T) ?? (fallback !== undefined ? fallback : key);
  };

  return { t, language };
};