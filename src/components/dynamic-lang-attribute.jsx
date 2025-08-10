"use client";
import { useEffect } from "react";
import { useLanguage } from "./language-provider";

export function DynamicLangAttribute() {
  const { language } = useLanguage();

  useEffect(() => {
  
    document.documentElement.lang = language;
  }, [language]);

  return null; 
}
