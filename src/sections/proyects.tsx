import { useActiveSection } from "../hooks/useActiveSection";
import ProjectCard from "../components/proyect-card";
import { useTranslation } from "../hooks/useTranslation";

function Proyects() {
    const activeSection = useActiveSection();
    const {t}= useTranslation()
    return (
        <div className={`w-full min-h-screen flex flex-col items-center justify-center ${activeSection === "projects"?'animate-fade-in-down':'animate-fade-out-up'} px-4 py-16`}>
            <p className="eyebrow">03</p>
            <h2 className="text-4xl md:text-6xl text-center mt-2">{t("my")} {t("projects")}</h2>
            <div className="w-full max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mt-12">
                <ProjectCard project="projectrecipes" projectdescription="recipedes"/>
                <ProjectCard project="todolist" projectdescription="tododes"/>
            </div>
        </div>
    );
}

export default Proyects;
