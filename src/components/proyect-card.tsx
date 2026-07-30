import { useTranslation } from "../hooks/useTranslation";
import type { TranslationKey } from "../translations/translations";

function ProjectCard({project, projectdescription}:{project:TranslationKey, projectdescription:TranslationKey}) {
    const {t} = useTranslation()
    let currentproject = "";
    let curretimage = "";
    switch (project) {
        case "todolist":
            currentproject = "https://facutateo.github.io/to-do-list/";
            curretimage = "todolist-image.png";
            break;
        case "projectrecipes":
            currentproject = "https://facutateo.github.io/recipes-page";
            curretimage = "recipe-image.png";
            break;
    }
    return (
        <div className="project-card rounded-lg p-4 w-full max-w-100 h-auto justify-items-center text-center hover:animate-scale proyect-card border border-(--div-background-color) bg-(--background-color)/40 backdrop-blur-sm transition-all duration-300">
        <a href={currentproject} className="view flex flex-col items-center" target="_blank" rel="noopener noreferrer">
            <h2 className="text-xl md:text-2xl font-bold mb-4 w-full truncate px-1">{t(project)}</h2>
            <img src={curretimage} alt={`${t(project)} image`} className="rounded border border-(--div-background-color) w-full object-cover aspect-video"/>
            <p className="hidden md:block mb-4 mt-4 text-xs text-left leading-relaxed">{t(projectdescription)}</p>
            <span className="mt-4 md:mt-0 font-medium text-sm text-(--secondary-color) hover:underline flex items-center gap-1">
            {t("view")} →
        </span>
        </a>
        </div>
    );
}

export default ProjectCard;
