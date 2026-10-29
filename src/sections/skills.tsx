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
            <div className="w-full max-w-4xl flex items-center overflow-hidden carrousel-container h-52 md:h-60">
                <ul className="flex flex-nowrap" id="carrousel">
                    {doubleSkills.map((skill, index) => (
                        <SkillCard key={`${skill}-${index}`} skill={skill} duplicate={index >= skills.length} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Skills;
