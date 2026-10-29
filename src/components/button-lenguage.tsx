import { useTranslation } from "../hooks/useTranslation"

const base = import.meta.env.BASE_URL

function ButtonLenguage() {
    const {language, setLanguage, t} = useTranslation()
    const toggleLenguage = () => setLanguage(language === 'es' ? 'en' : 'es')
    return (
        <button
            type="button"
            onClick={toggleLenguage}
            aria-label={t("lang")}
            className="grid place-items-center w-8 h-8 rounded-full hover:bg-accent/10 cursor-pointer hover:animate-squeeze"
        >
            <img src={`${base}${language === 'es' ? 'SPANISH.svg' : 'ENGLISH.svg'}`} alt="" width={16} height={16} className="w-4 select-none" />
        </button>
    )
}

export default ButtonLenguage
