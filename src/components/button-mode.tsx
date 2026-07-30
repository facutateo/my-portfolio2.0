import { useEffect, useState } from "react"


function Buttonmode() {
    const [mode, setMode] = useState<'light' | 'dark'>(localStorage.getItem('mode') === 'dark' ? 'dark' : 'light')
    const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
    
}
    useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('dark')
    if(mode == 'dark'){
        root.classList.add('dark')
    }
    localStorage.setItem('mode', mode)
    document.body.classList.add('transition-enabled')
}, [mode])
return (
    <>
    <label className="cursor-pointer hover:animate-squeeze hover:animate-iteration-count-infinite">
        
        <input
            type="checkbox"
            checked={mode === 'dark'}
            onChange={toggleMode}
            className="peer hidden"
        />

        <div className="
        w-4 h-4
        rounded-full
        bg-slate-800
        [mask:radial-gradient(circle_at_100%_30%,transparent_55%,black_56%)]
        transition-all duration-300
        peer-checked:bg-yellow-400
        peer-checked:[mask:none]
        ">
        </div>
    </label>
    </>
)
}

export default Buttonmode