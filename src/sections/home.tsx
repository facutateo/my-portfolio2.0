import { useTranslation } from "../hooks/useTranslation";
import { GitHub } from "../../public/icon/github";
import { LinkedIn } from "../../public/icon/linkedln";
import { useState } from "react";
import ShapeGrid from "../components/ShapeGrid";

const CV_URL = `${import.meta.env.BASE_URL}CV-Facundo-Tateossian.pdf`;

function Home() {
    const [isclicked, setIsClicked] = useState<boolean>(false);
    const {t} = useTranslation()
    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 2000);
    };
    return (
        <div className="min-h-svh w-full flex flex-col items-center justify-center relative animate-fade-in px-4 -mt-16 pt-16">
            <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden mask-[linear-gradient(to_bottom,black_60%,transparent_100%)]" aria-hidden="true">
                <ShapeGrid
                speed={0.4}
                squareSize={44}
                direction='diagonal' // up, down, left, right, diagonal
                hoverFillColorVar="--glow"
                borderColorVar="--grid-line"
                vignetteColorVar="--bg"
                shape='square' // square, hexagon, circle, triangle
                hoverTrailAmount={4} // number of trailing hovered shapes (0 = no trail)
                />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[38rem] max-w-[90vw] aspect-square rounded-full bg-(--glow) blur-3xl pointer-events-none" />
            </div>
            <div className="flex flex-col items-center text-center max-w-4xl">
                <p className="eyebrow mb-5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-spark animate-pulse" aria-hidden="true" />
                    {t("dev")}
                </p>
                <h1 className="font-display text-5xl sm:text-6xl md:text-8xl tracking-tight leading-[0.95]">
                    Facundo <span className="text-accent">Tateossian</span><span className="text-spark">.</span>
                </h1>
                <p className="mt-6 text-lg md:text-xl text-muted max-w-xl text-pretty">{t("tagline")}</p>
            </div>
            <div className="flex flex-wrap gap-3 mt-10 items-center justify-center">
                <a href={CV_URL} download className={`btn btn-primary whitespace-nowrap ${isclicked? "animate-contract-vertically" : "animate-expand-vertically"}`} onClick={handleClick}>
                    {t("download")}
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 4v12m0 0-5-5m5 5 5-5M5 20h14"/></svg>
                </a>
                <a href="https://github.com/facutateo" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="btn btn-ghost !p-3 hover:animate-jelly">
                    <GitHub className="w-5 h-5"/>
                </a>
                <a href="https://www.linkedin.com/in/facundo-tateossian/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="btn btn-ghost !p-3 hover:animate-jelly">
                    <LinkedIn className="w-5 h-5"/>
                </a>
            </div>
            <a href="#about" className="absolute bottom-8 text-muted hover:text-accent animate-bounce" aria-label={t("about")}>
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
            </a>
        </div>
    );
}

export default Home;
