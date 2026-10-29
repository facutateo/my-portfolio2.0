import { useTranslation } from "../hooks/useTranslation";
import BotonLenguage from "./button-lenguage";
import ButtonMode from "./button-mode";
import { useActiveSection } from "../hooks/useActiveSection";
import { useState } from "react";
import Logo from "./logo";

const LINKS = ["about", "skills", "projects", "contact"] as const;

function Navbar() {
  const {t} = useTranslation()
  const activeSection = useActiveSection();
  const [isOpen, setIsOpen] = useState(false)

  const getLinkClass = (sectionId: string) => {
    return activeSection === sectionId
      ? "text-accent after:scale-x-100"
      : "text-muted hover:text-ink";
  };
  return (
    <nav className="sticky top-3 z-50 mx-3 md:mx-6 h-16 px-4 md:px-6 flex items-center justify-between rounded-full border border-line bg-bg/75 backdrop-blur-md shadow-[0_8px_30px_-12px_var(--glow)] animate-slide-in-top">
      <a href="#home" aria-label="Facundo Tateossian — inicio" className="hover:animate-pulse">
        <Logo className="h-9 w-auto" />
      </a>
      <div className={`fixed md:static top-[5.5rem] left-3 right-3 md:w-auto rounded-3xl md:rounded-none border md:border-0 border-line bg-bg md:bg-transparent flex-col md:flex-row flex items-center justify-center gap-1 md:gap-2 p-4 md:p-0 shadow-xl md:shadow-none transition-all duration-300 ease-in-out ${isOpen? "opacity-100 translate-y-0":"opacity-0 -translate-y-6 pointer-events-none md:opacity-100 md:translate-y-0 md:pointer-events-auto"}`}>
        {LINKS.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setIsOpen(false)}
            aria-current={activeSection === id ? "true" : undefined}
            className={`relative px-4 py-3 md:py-2 text-lg md:text-sm font-semibold transition-colors after:absolute after:left-4 after:right-4 after:bottom-1 after:h-0.5 after:rounded-full after:bg-accent after:scale-x-0 after:origin-left after:transition-transform ${getLinkClass(id)}`}
          >
            {t(id)}
          </a>
        ))}
      </div>
      <div className="flex justify-end items-center gap-2">
        <div className="flex items-center gap-1 rounded-full border border-line p-1">
          <ButtonMode />
          <BotonLenguage />
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden grid place-items-center w-10 h-10 rounded-full text-ink hover:bg-accent/10 cursor-pointer"
          aria-label={t("menu")}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16M4 12h16M4 17h10" /></svg>
          )}
        </button>
      </div>
    </nav>
  );
}
export default Navbar;
