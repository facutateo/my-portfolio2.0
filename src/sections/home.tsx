import { useTranslation } from "../hooks/useTranslation";
import { GitHub } from "../../public/icon/github";
import { LinkedIn } from "../../public/icon/linkedln";
import { useState } from "react";



function Home() {
    const [isclicked, setIsClicked] = useState<boolean>(false);
    const {t} = useTranslation()
    const handleClick = () => {
    setIsClicked(true);
    const link = document.createElement('a');
    link.href = '/CV-Facundo-Tateossian.pdf';
    link.setAttribute('download', 'CV-Facundo-Tateossian.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);;
    
    setTimeout(() => {
        setIsClicked(false);
    }, 2000);
    };
    return (
        <div className="h-screen  w-full flex flex-col items-center justify-center relative animate-fade-in bg-linear-to-b from-(--div-background-color) to-transparent px-4">
            <div className="flex flex-col items-center text-center">
                <h1 className="md:text-7xl text-4xl sm:text-5xl font-bold tracking-tight">Facundo Tateossian</h1>
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-2 text-(--secondary-color)">{t("dev")}</h1>
            </div>
            <div className="flex flex-wrap gap-5 mt-8 items-center justify-center"> 
                <a href="https://github.com/facutateo" target="_blank" rel="noopener noreferrer" className="hover:animate-jelly">
                    <GitHub className="w-8 h-8"/>
                </a>
                <a href="/CV-Facundo-Tateossian.pdf" rel="noopener noreferrer" target="_blank" className={`buttondw whitespace-nowrap ${isclicked? "animate-contract-vertically" : "animate-expand-vertically"}`} onClick={handleClick}>{t("download")}</a>
                <a href="https://www.linkedin.com/in/facundo-tateossian/" target="_blank" rel="noopener noreferrer" className="hover:animate-jelly">
                    <LinkedIn className="w-8 h-8"/>
                </a>
            </div>
        </div>
    );
}

export default Home;
