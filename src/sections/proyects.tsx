import {useActiveSection} from "../hooks/useActiveSection";
import ProjectCard from "../components/proyect-card";
import { useTranslation } from "../hooks/useTranslation";

function Proyects() {
    const activeSection = useActiveSection(["home","about","skills", "projects", "contact"]);
    const {t}= useTranslation()
    return (
        <div className={`w-full min-h-screen flex flex-col items-center justify-center ${activeSection === "projects"?'animate-fade-in-down':'animate-fade-out-up'} px-4`}>
            <h1 className="text-3xl md:text-5xl font-bold text-center">{t("my")} {t("projects")}</h1>
            <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-6 md:gap-10 mt-10 justify-center items-center">
            <ProjectCard project="projectrecipes" projectdescription="recipedes"/>
            <ProjectCard project="todolist" projectdescription="tododes"/>
            </div>
        </div>
    );
}

export default Proyects;
