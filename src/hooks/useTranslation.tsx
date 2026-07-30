import { useState, useEffect } from "react"
import { translations, type TranslationKey } from "../translations/translations"

let currentLang = localStorage.getItem('Language') || 'es'
const listeners: Set<(lang:'es'|'en')=> void> = new Set()

export const useTranslation = () => {
    const [language, setLanguageState] = useState(currentLang)

    const setLanguage = (newLang: 'es' | 'en') => {
        currentLang = newLang
        localStorage.setItem('Language', newLang)
        listeners.forEach((listeners)=> listeners(newLang))
    }

    useEffect(()=>{
    listeners.add(setLanguageState)
    return () => {listeners.delete(setLanguageState)}
    },[])
    const t = (key:TranslationKey)=>{ 
        const langkey = language as keyof typeof translations
        return translations [langkey][key as keyof typeof translations.es]

    }
    return {language, setLanguage, t}
}
