import { useTranslation } from "../hooks/useTranslation";
import {useActiveSection} from "../hooks/useActiveSection";


function About() {
  const activeSection = useActiveSection(["home","about","skills", "projects", "contact"]);
  const {t} = useTranslation()
  return (
    <div className={`w-full min-h-screen flex flex-col justify-center items-center ${activeSection === "about"? "animate-fade-in-down": "animate-fade-out-up"} px-4`}>
      <div>
        <h1 className="md:text-5xl text-3xl font-bold text-center">{t("about")}</h1>
      </div>
      <div className="w-full max-w-3xl mx-auto p-6 md:p-8 rounded-lg shadow-lg h-auto mt-8 border border-(--div-background-color) bg-(--background-color)/50 backdrop-blur-sm">
        <h1 className="text-2xl underline">{t("presentation")}</h1>
        <p className="mt-4 text-base md:text-lg leading-relaxed text-pretty">{t("h")}</p>
        <h1 className="text-2xl mt-6 underline">{t("education")}</h1>
        <div className="list-disc list-inside ml-2 md:ml-4 mt-4 space-y-2 text-base md:text-lg">
        <li>{t("deseduc1")}</li>
        <li>{t("deseduc2")}</li>
        </div>
        </div>
    </div>
  );
}

export default About;
