import SkillCard from "../components/skillcard";
import { useTranslation } from "../hooks/useTranslation";
import { useActiveSection } from "../hooks/useActiveSection";

const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Git", "Github", "TailwindCSS","Figma","Python","C#","SQL"];
const doubleSkills = [...skills, ...skills];

function Skills() {
    const {t} = useTranslation()
    const activeSection = useActiveSection();
    return (
        <div className={`w-full min-h-screen flex flex-col items-center justify-center ${activeSection === "skills"?'animate-fade-in-down':'animate-fade-out-up'} py-16`}>
            <div className="text-center pb-10 md:pb-16">
                <p className="eyebrow">02</p>
                <h2 className="md:text-6xl text-4xl mt-2">{t("my")} {t("skills")}</h2>
            </div>
            {/* Celular: carrusel infinito. Escritorio: grilla con todas las skills a la vista. */}
            <div className="w-full max-w-4xl flex items-center overflow-hidden md:overflow-visible carrousel-container h-52 md:h-auto motion-reduce:h-auto motion-reduce:py-2 px-4 md:px-8">
                <ul className="flex flex-nowrap gap-4" id="carrousel">
                    {doubleSkills.map((skill, index) => (
                        <SkillCard key={`${skill}-${index}`} skill={skill} duplicate={index >= skills.length} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Skills;
