import { useTranslation } from "../hooks/useTranslation";
import type { TranslationKey } from "../translations/translations";

const base = import.meta.env.BASE_URL

const PROJECTS: Partial<Record<TranslationKey, { url: string; image: string }>> = {
    todolist: { url: "https://facutateo.github.io/to-do-list/", image: "todolist-image.webp" },
    projectrecipes: { url: "https://facutateo.github.io/recipes-page", image: "recipe-image.webp" },
};

function ProjectCard({project, projectdescription}:{project:TranslationKey, projectdescription:TranslationKey}) {
    const {t} = useTranslation()
    const data = PROJECTS[project]
    return (
        <article className="group rounded-3xl p-3 w-full border border-line bg-surface/70 backdrop-blur-sm hover:border-accent hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_var(--glow)] transition-all duration-300">
            <a href={data?.url} className="flex flex-col h-full" target="_blank" rel="noopener noreferrer">
                <div className="overflow-hidden rounded-2xl border border-line">
                    <img src={`${base}${data?.image}`} alt={t(project)} width={800} height={395} loading="lazy" decoding="async" className="w-full object-cover aspect-video transition-transform duration-500 group-hover:scale-105"/>
                </div>
                <div className="p-4 md:p-5 flex flex-col flex-1">
                    <h3 className="text-xl md:text-2xl">{t(project)}</h3>
                    <p className="hidden md:block mt-3 text-sm leading-relaxed text-muted">{t(projectdescription)}</p>
                    <span className="mt-4 md:mt-auto md:pt-5 font-bold text-sm text-accent flex items-center gap-1">
                        {t("view")}
                        <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
                    </span>
                </div>
            </a>
        </article>
    );
}

export default ProjectCard;
