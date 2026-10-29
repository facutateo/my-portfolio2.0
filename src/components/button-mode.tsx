import { useEffect, useState } from "react"
import { useTranslation } from "../hooks/useTranslation"

function Buttonmode() {
    const { t } = useTranslation()
    const [mode, setMode] = useState<'light' | 'dark'>(document.documentElement.classList.contains('dark') ? 'dark' : 'light')
    const toggleMode = () => {
        document.body.classList.add('transition-enabled')
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
    }
    useEffect(() => {
        const root = document.documentElement;
        root.classList.toggle('dark', mode === 'dark')
        root.classList.toggle('light', mode === 'light')
        localStorage.setItem('mode', mode)
        document.querySelector('meta[name="theme-color"]')?.setAttribute('content', mode === 'dark' ? '#0a0d16' : '#f4f6fb')
    }, [mode])
    return (
        <button
            type="button"
            onClick={toggleMode}
            aria-label={t("theme")}
            aria-pressed={mode === 'dark'}
            className="grid place-items-center w-8 h-8 rounded-full hover:bg-accent/10 cursor-pointer hover:animate-squeeze"
        >
            <span className={`
            block w-4 h-4 rounded-full transition-all duration-300
            ${mode === 'dark'
                ? 'bg-spark shadow-[0_0_10px_var(--spark)]'
                : 'bg-ink [mask:radial-gradient(circle_at_100%_30%,transparent_55%,black_56%)]'}
            `} />
        </button>
    )
}

export default Buttonmode
