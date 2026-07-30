import { useTranslation } from "../hooks/useTranslation"

import { useEffect } from "react"



function ButtonLenguage() {
    const {language, setLanguage} = useTranslation()
    const toggleLenguage = () => {
        const newlanguage = language === 'es'? 'en': 'es'
        setLanguage(newlanguage)
    }
    useEffect(()=>{
        localStorage.setItem('language', language)
    },[language])
    return (
        <label className="relative cursor-pointer hover:animate-squeeze hover:animate-iteration-count-infinite">
        <input type="checkbox" className="peer sr-only " checked={language === 'es'} onChange={toggleLenguage} />
            <div className="w-4 select-none">
                <img src={language === 'es' ? 'SPANISH.svg' : 'ENGLISH.svg'} alt= {language === 'es' ? 'es' : 'en'}/>
            </div>
        </label>
    )
}

export default ButtonLenguage
