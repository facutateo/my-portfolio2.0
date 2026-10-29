const base = import.meta.env.BASE_URL

function SkillCard({ skill, duplicate = false }: { skill: string; duplicate?: boolean }) {
    return (
        <li
            aria-hidden={duplicate || undefined}
            className={`group shrink-0 mr-4 md:mr-6 w-33 h-40 md:w-40 md:h-48 rounded-3xl p-3 md:p-4 flex flex-col justify-center items-center gap-4 hover:animate-bouncing border border-line bg-surface/70 hover:border-accent transition-colors duration-300`}
        >
            <img src={`${base}icon/${skill === 'C#' ? 'Csharp' : skill}.svg`} alt="" width={48} height={48} loading="lazy" decoding="async" className={`h-12 w-12 transition-transform duration-300 group-hover:scale-110 ${skill === 'Github' ? 'invert dark:invert-0' : ''}`} />
            <h3 className="text-base md:text-lg text-center w-full leading-tight">{skill === 'TailwindCSS' ? 'Tailwind CSS' : skill}</h3>
        </li>
    );
}

export default SkillCard;
