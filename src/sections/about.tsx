import { useTranslation } from "../hooks/useTranslation";
import { useActiveSection } from "../hooks/useActiveSection";

function About() {
  const activeSection = useActiveSection();
  const {t} = useTranslation()
  return (
    <div className={`w-full min-h-screen flex flex-col justify-center items-center ${activeSection === "about"? "animate-fade-in-down": "animate-fade-out-up"} px-4 py-16`}>
      <div className="text-center">
        <p className="eyebrow">01</p>
        <h2 className="md:text-6xl text-4xl mt-2">{t("about")}</h2>
      </div>
      <div className="w-full max-w-3xl mx-auto mt-10 grid gap-4 md:gap-6">
        <article className="p-6 md:p-10 rounded-3xl border border-line bg-surface/70 backdrop-blur-sm">
          <h3 className="text-2xl md:text-3xl">{t("presentation")}</h3>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-pretty text-muted">{t("h")}</p>
        </article>
        <article className="p-6 md:p-10 rounded-3xl border border-line bg-surface/70 backdrop-blur-sm">
          <h3 className="text-2xl md:text-3xl">{t("education")}</h3>
          <ul className="mt-4 space-y-3 text-base md:text-lg leading-relaxed">
            {(["deseduc1", "deseduc2"] as const).map((key) => (
              <li key={key} className="flex gap-3 text-muted">
                <span className="mt-2.5 w-2 h-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span>{t(key)}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  );
}

export default About;
