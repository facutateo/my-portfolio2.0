import SkillCard from "../components/skillcard";
import { useTranslation } from "../hooks/useTranslation";
import {useActiveSection} from "../hooks/useActiveSection";

function Skills() {
    const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Git", "Github", "TailwindCSS","Figma"];
    const doubleSkills = [...skills, ...skills];
    const {t} = useTranslation()
    const activeSection = useActiveSection(["home","about","skills", "projects", "contact"]);
    return (
        <div className={`w-full min-h-screen flex flex-col items-center justify-center ${activeSection === "skills"?'animate-fade-in-down':'animate-fade-out-up'}`}>
            <div className="text-center p-10 md:p-20">
            <h1 className="md:text-5xl text-3xl">{t("my")} {t("skills")}</h1>
            </div>
        <div className="w-full max-w-4xl md:w-auto flex items-center overflow-hidden carrousel-container h-52 md:h-60 px-4 md:mr-20 md:ml-10">
            <div className="flex flex-nowrap md:gap-10 gap-4" id="carrousel">
                {doubleSkills.map((skill, index) => (
                    <SkillCard key={`${skill}-${index}`} skill={skill} />
                ))}
            </div>
        </div>
        </div> 
    );
}

export default Skills;
