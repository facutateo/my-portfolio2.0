import { useSyncExternalStore } from "react"
import { translations, type Language, type TranslationKey } from "../translations/translations"

const stored = localStorage.getItem('language')
let currentLang: Language = stored === 'en' || stored === 'es' ? stored : 'es'
document.documentElement.lang = currentLang
const listeners = new Set<() => void>()

const subscribe = (listener: () => void) => {
    listeners.add(listener)
    return () => { listeners.delete(listener) }
}

const setLanguage = (newLang: Language) => {
    currentLang = newLang
    localStorage.setItem('language', newLang)
    document.documentElement.lang = newLang
    listeners.forEach((l) => l())
}

export const useTranslation = () => {
    const language = useSyncExternalStore(subscribe, () => currentLang)
    const t = (key: TranslationKey) => translations[language][key]
    return { language, setLanguage, t }
}
